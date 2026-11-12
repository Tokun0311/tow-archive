# Publishing Writing in Tow Archive

New essays, reviews and research notes can be added as Markdown files under `src/data/writing/`.

1. Create `src/data/writing/my-first-essay.md` (use a unique short English/ASCII filename).
2. Copy the template below, replace the example values and write below `---`.
3. Keep `draft: true` until ready to publish. Change to `false` when the article is ready.
4. Run `npm run build`, commit and Push with GitHub Desktop.
5. Visit `/writing/` for the article list and `/writing/my-first-essay/` for the essay.

```md
---
title: "文章标题"
date: 2026-11-12
type: "Essay"
language: "ZH"
description: "一句话介绍文章内容。"
tags: ["Curatorial Studies", "Institutional Studies"]
draft: true
---

在这里开始写作。

## 第一个小标题

正文支持 Markdown，包括段落、链接、引用及图片。
```

Use `type: "Review"` for exhibition reviews, `type: "Research Note"` for shorter research notes, and `type: "Essay"` for longform.

Accepted language labels in the archive: `ZH`, `JA`, `EN`. Public articles will also appear in the home archive; drafts are hidden from all public pages.

The preexisting demonstration writing entry `on-exhibitions.md` is now `draft: true`; it is not a published text by the site's owner.
