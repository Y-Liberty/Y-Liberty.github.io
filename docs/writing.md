# 写作规范

本站是 Hexo 静态站，文章以 Markdown 存放于 `source/_posts/`。这份规范的目标是：**新文章不会制造断链、不会被分类体系拒绝、发布后 URL 不会变**。

## 一、新建文章

```bash
npx hexo new "C++ 二分查找"
```

会按 `scaffolds/post.md` 生成：

```markdown
---
title: C++ 二分查找
date: 2026-11-16 10:00:00
categories:
tags:
---
```

## 二、front-matter 字段

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | ✅ | 文章标题，只影响展示，不影响 URL |
| `date` | ✅ | 发布日期，用于排序与归档 |
| `categories` | ✅ | 分类，只能从白名单里选，且只填 1 个 |
| `tags` | ✅ | 标签，1–3 个，优先复用已有标签 |
| `updated` | 可选 | 真实修改时间；不填时"更新于"等于发布日期 |
| `cover` | 可选 | 封面图，建议 16:9；18/21 篇已有，尽量补齐 |
| `description` | 可选 | 一句话摘要，用于 SEO 描述与首页摘要 |
| `sticky` | 可选 | 置顶权重，数字越大越靠前 |
| `top_group_index` | 可选 | 首页推荐位分组 |

**不要**手写 `permalink`、`abbrlink`：URL 由文件名决定，加这些字段只会造成混乱。

## 三、分类与标签

白名单在 `source/_data/taxonomy.yml`，由 `npm run check` 强制校验。

- **分类（4 个，固定）**：CPP、Python、算法学习、英才计划
- **标签（9 个）**：C++ 基础语法、C++ 算法与数据结构、Python 基础语法、Python 进阶应用、环境配置、动态规划、背包问题、搜索算法、英才计划

需要新标签时，先在 `taxonomy.yml` 登记再使用；标签总数控制在 10 个以内，避免每个词都变成标签。

## 四、URL 规则（重要）

- `permalink` 配置为 `:title/`，Hexo 的 `:title` 取的是**文件名**，不是标题。
- 因此：**发布后不要改文件名**，改了等于换 URL，旧链接直接 404。
- 需要修正标题措辞时，只改 front-matter 里的 `title`，文件名保持不动。
- 文件名用英文 + 下划线（如 `CPP_DP_knapsack.md`），不要用中文或空格。

## 五、链接与图片

- 站内链接写绝对路径：`[关于](/about/)`、`[分类](/categories/CPP/)`；
- 指向文章的链接用文件名：`[背包问题](/CPP_DP_knapsack/)`；
- 图片使用完整 URL（`https://...`）或站内绝对路径（`/img/xxx.png`），不要用相对路径；
- 外链会自动加 `target="_blank"`，无需手写。

`npm run check` 会校验所有站内链接是否真实存在，写完先跑一遍。

## 六、草稿流程

1. 草稿放 `source/_drafts/`（不会被构建，也不会出现在线上）；
2. 写完后 `npx hexo publish "标题"` 移动到 `source/_posts/`；
3. 不想走 `hexo publish` 也可以直接手动移动文件，效果相同；
4. 废弃草稿请移出仓库（放工作区的「文章草稿_待发布」），不要长期堆在 `_drafts/`。

## 七、发布前自检清单

```bash
npm run check     # 必须 0 错误
npm run server    # 可选：本地预览，看排版与图片
git add -A
git commit -m "post: 文章标题"
git push
```

- [ ] `npm run check` 通过
- [ ] 分类、标签在白名单内
- [ ] 封面图可访问
- [ ] 文中的站内链接都能打开
- [ ] 代码块语言标记正确（```cpp / ```python）

## 八、常见错误

| 现象 | 原因 | 处理 |
|---|---|---|
| 线上 404 | 改了文件名字 | 改回原文件名，或用 Vercel 重定向（需另配） |
| 分类页为空 | 分类不在白名单/拼写不一致 | 核对 `taxonomy.yml` |
| 文章重复出现 | 草稿与正式文章同名 | 删除草稿 |
| "更新于"是今天 | 在 front-matter 写了 `updated`，或未走 mtime 归一化 | 检查 `updated` 字段 |
| 构建失败 | front-matter YAML 缩进错误 | 用 `npm run check` 或本地 `npm run build` 定位 |
