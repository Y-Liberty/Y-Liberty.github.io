# 壹零贰肆博客（Hexo + AnZhiYu + Vercel）

少儿编程中心的内容站源码仓库。写作 → 推送 → Vercel 自动构建上线，无需本地打包发布。

- 线上地址：https://blog.1024code.top/
- 源码仓库：https://github.com/Y-Liberty/Y-Liberty.github.io
- 框架：Hexo 7.2.0，主题 AnZhiYu
- 部署：GitHub `main` → Vercel（Node 26，`npm ci` → `hexo generate` → `public/`）

## 目录结构

```
Blog/
├─ scaffolds/        新建文章的模板
├─ scripts/          自定义脚本（内容自检、页面生成器）
├─ source/
│  ├─ _data/         站点数据（分类白名单、友链、关于页等）
│  ├─ _drafts/       草稿（不会被构建）
│  ├─ _posts/        已发布文章，文件名即 URL
│  └─ <页面名>/      独立页面（about、courses、privacy……）
├─ themes/anzhiyu/   主题（保持官方原版，不直接改）
├─ _config.yml       站点配置
├─ _config.anzhiyu.yml  主题配置（所有站点级定制都在这里）
├─ vercel.json       构建声明（build / install / output）
└─ docs/             写作与维护文档
```

## 常用命令

```bash
npm ci              # 首次安装依赖（不要用 npm install，保持锁文件一致）
npm run server      # 本地预览 http://localhost:4000
npm run build       # 构建到 public/
npm run check       # 内容自检（front-matter、站内链接、分类标签白名单）
npm run clean       # 清空 public/ 与缓存
```

## 写作与发布

```bash
# 1. 新建文章（会自动套用 scaffolds/post.md 模板）
npx hexo new "文章标题"

# 2. 写作；草稿阶段可先放 source/_drafts，完成后
npx hexo publish "文章标题"

# 3. 发布前自检
npm run check

# 4. 推送即上线
git add -A
git commit -m "post: 文章标题"
git push
```

细节规则见 [写作规范](docs/writing.md)。**已发布文章不要改文件名**——文件名就是 URL。

## 部署说明

- `vercel.json` 固定了 `npm run build`、`npm ci`、输出目录 `public`，面板设置不必再改。
- `engines.node` 固定为 `26.x`，Vercel 已停用更低的 Node。
- 预览部署受 Vercel Standard Protection 保护，需登录 Vercel 才能访问；生产域名公开。

## 回滚

任一版本出问题，把 `main` 指回上一个正常提交即可：

```bash
git log --oneline -10          # 找到正常版本
git revert <坏提交>             # 反向提交（推荐，保留历史）
# 或强制回退：
git push origin <正常提交>:main --force
```

## 环境注意

- 本地 Node 版本建议与 Vercel 一致（26.x）；低于此版本构建会告警但不阻断。
- Windows 下换行符由 `.gitattributes` 统一（仓库内 LF），不要在编辑器里改掉自动换行设置。

## 相关文档

- [写作规范](docs/writing.md)
- [主题官方文档](https://blog.anheyu.com/docs/)
- [Hexo 文档](https://hexo.io/docs/)
