# Tow Archive | 两项修正（2026-11-13）

这次只修改了网站元数据和机构关系，**第1至31篇文章正文均未修改**。

## 处理内容

1. 删除旧记录 `src/data/exhibitions/2026-01-21-05.md`，保留 `2026-01-24-05.md`。
2. 修正 `src/data/exhibitions/2026-05-29-31.md` 的页面标题、location和institution：国際文化会館 / International House of Japan。
3. 创建 `src/data/institutions/international-house-of-japan.md`，移除 `src/data/institutions/tokyo-bunka-kaikan.md`。

## Windows 安装

1. **备份**已有项目。
2. 将本 ZIP 的 `tow-archive` 文件夹**内部所有文件**复制到**现有项目根目录**，选择覆盖。
3. 在**现有项目根目录**运行 `APPLY-TWO-FIXES.bat`。注意，不能在单独解压出来的新 ZIP 文件夹中执行来代替删除旧项目的文件。
4. 打开 GitHub Desktop，检查 `2026-01-21-05.md` 和 `tokyo-bunka-kaikan.md` 均为 **Deleted**，第31条 Markdown 文件为 Modified，新机构文件为 Added。
5. 在项目根目录运行 `npm run build`，确认成功后 Commit / Push。
6. Cloudflare Pages 部署后检查 `/exhibitions/` 无 01.21 重复项，第31条机构指向 `/institutions/international-house-of-japan/`。

若旧记录仍在，说明脚本没有在**真正连接 GitHub 的本地仓库**执行或变更没有 Push 到用于 Cloudflare 部署的分支。
