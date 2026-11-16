#!/usr/bin/env node
/**
 * 内容自检脚本：npm run check
 *
 * 检查项：
 *  1. front-matter 必填字段（title / date / categories / tags）
 *  2. 文件名（即 URL）是否重复
 *  3. 正文里的站内链接是否存在对应页面 / 文章 / 静态文件
 *  4. categories / tags 是否在 source/_data/taxonomy.yml 白名单内
 *  5. 封面等图片地址是否 http(s) 或站内绝对路径
 *
 * 有错误时退出码为 1；只有警告时退出码为 0。
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'source');
const POSTS = path.join(SOURCE, '_posts');
const TAXONOMY = path.join(SOURCE, '_data', 'taxonomy.yml');

const errors = [];
const warnings = [];
const addError = (file, msg) => errors.push(`${file}: ${msg}`);
const addWarn = (file, msg) => warnings.push(`${file}: ${msg}`);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/** 极简 YAML 列表解析：只认 `key:` 下面 `- item` 的形式 */
function parseListYaml(file, key) {
  if (!fs.existsSync(file)) return [];
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const items = [];
  let inBlock = false;
  for (const line of lines) {
    if (/^[A-Za-z_]+:/.test(line)) {
      inBlock = line.startsWith(`${key}:`);
      continue;
    }
    if (inBlock) {
      const m = line.match(/^\s*-\s*(.+?)\s*$/);
      if (m) items.push(m[1].trim().replace(/^['"]|['"]$/g, ''));
    }
  }
  return items;
}

/** 解析 front-matter（只支持本项目用到的简单结构） */
function parseFrontMatter(text) {
  const m = text.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const body = text.slice(m[0].length);
  const raw = m[1].split(/\r?\n/);
  const fm = { lists: {}, scalars: {} };
  let listKey = null;
  for (const line of raw) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) {
      const [, k, v] = kv;
      if (v.trim() === '') {
        listKey = k;
        fm.lists[k] = fm.lists[k] || [];
      } else {
        listKey = null;
        fm.scalars[k] = v.trim().replace(/^['"]|['"]$/g, '');
      }
      continue;
    }
    const li = line.match(/^\s*-\s*(.+?)\s*$/);
    if (li && listKey) fm.lists[listKey].push(li[1].trim().replace(/^['"]|['"]$/g, ''));
  }
  return { fm, body };
}

/* ---------------- 1. 收集合法目标 ---------------- */
const validTargets = new Set();
const addTarget = (p) => {
  if (!p) return;
  let t = p;
  if (!t.startsWith('/')) t = '/' + t;
  try { t = decodeURIComponent(t); } catch { /* 保留原样 */ }
  validTargets.add(t);
  if (t.endsWith('/index.html')) validTargets.add(t.replace(/index\.html$/, ''));
  if (t.endsWith('/')) validTargets.add(t.slice(0, -1));
  else validTargets.add(t + '/');
};

// 1.1 页面目录（含 index.md 的目录）
for (const file of walk(SOURCE)) {
  const rel = path.relative(SOURCE, file).split(path.sep).join('/');
  if (rel.startsWith('_') || rel.startsWith('_posts/') || rel.startsWith('_drafts/')) continue;
  if (rel.endsWith('index.md')) {
    const dir = rel.replace(/index\.md$/, '');
    addTarget('/' + dir);
  } else if (!rel.endsWith('.md')) {
    addTarget('/' + rel); // 静态资源
  }
}

// 1.2 Hexo 与插件生成的固定路径
for (const p of [
  '/', '/archives/', '/categories/', '/tags/', '/page/', '/comments/', '/atom.xml',
  '/sitemap.xml', '/robots.txt', '/search.xml', '/manifest.json', '/404.html',
]) addTarget(p);
for (const name of parseListYaml(TAXONOMY, 'categories')) {
  addTarget(`/categories/${name}/`);
}
for (const name of parseListYaml(TAXONOMY, 'tags')) {
  addTarget(`/tags/${name}/`);
}

/* ---------------- 2. 逐篇检查 ---------------- */
const posts = fs.existsSync(POSTS)
  ? fs.readdirSync(POSTS).filter((f) => f.endsWith('.md'))
  : [];

const slugs = new Map();
const allowedCategories = new Set(parseListYaml(TAXONOMY, 'categories'));
const allowedTags = new Set(parseListYaml(TAXONOMY, 'tags'));

for (const file of posts) {
  const full = path.join(POSTS, file);
  const slug = file.replace(/\.md$/, '');
  const text = fs.readFileSync(full, 'utf8');
  const parsed = parseFrontMatter(text);
  if (!parsed) {
    addError(file, '缺少 front-matter（文件开头需要 --- ... ---）');
    continue;
  }
  const { fm, body } = parsed;

  // 2.1 必填字段
  for (const key of ['title', 'date']) {
    if (!fm.scalars[key]) addError(file, `front-matter 缺少 ${key}`);
  }
  const categories = fm.lists.categories || [];
  const tags = fm.lists.tags || [];
  if (categories.length === 0) addError(file, 'front-matter 缺少 categories');
  if (tags.length === 0) addError(file, 'front-matter 缺少 tags');

  // 2.2 分类 / 标签白名单
  for (const c of categories) {
    if (allowedCategories.size && !allowedCategories.has(c)) {
      addError(file, `分类「${c}」不在 taxonomy.yml 白名单内`);
    }
  }
  for (const t of tags) {
    if (allowedTags.size && !allowedTags.has(t)) {
      addError(file, `标签「${t}」不在 taxonomy.yml 白名单内`);
    }
  }
  if (tags.length > 3) addWarn(file, `标签偏多（${tags.length} 个），建议 1-3 个`);

  // 2.3 文件名重复
  if (slugs.has(slug)) addError(file, `文件名与 ${slugs.get(slug)} 重复，会产生同一 URL`);
  else slugs.set(slug, file);
  addTarget('/' + slug + '/');

  // 2.4 站内链接
  const targets = new Set();
  for (const m of body.matchAll(/\]\((\/[^)\s]+)\)/g)) targets.add(m[1]);
  for (const m of body.matchAll(/href="(\/[^"#?]+)"/g)) targets.add(m[1]);
  for (const t of targets) {
    if (t.startsWith('//')) continue;
    const clean = t.split('#')[0].split('?')[0];
    if (!clean || clean === '/') continue;
    if (!validTargets.has(clean) && !validTargets.has(clean.replace(/\/$/, ''))) {
      addError(file, `站内链接指向不存在的地址：${clean}`);
    }
  }

  // 2.5 图片地址
  for (const m of body.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const url = m[1];
    if (!/^(https?:)?\/\//.test(url) && !url.startsWith('/')) {
      addWarn(file, `图片使用了相对路径（构建后可能失效）：${url}`);
    }
  }
}

/* ---------------- 3. 输出 ---------------- */
const total = posts.length;
console.log(`\n检查文章：${total} 篇`);
if (warnings.length) {
  console.log(`\n警告 ${warnings.length} 条：`);
  for (const w of warnings) console.log('  ⚠ ' + w);
}
if (errors.length) {
  console.log(`\n错误 ${errors.length} 条：`);
  for (const e of errors) console.log('  ✗ ' + e);
  console.log('\n内容自检未通过。\n');
  process.exit(1);
}
console.log(`\n✓ 内容自检通过${warnings.length ? `（${warnings.length} 条警告）` : ''}。\n`);
