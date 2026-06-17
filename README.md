# MY BLOG

ClaudeCodeで自作したAstro製ブログ。Cloudflare Workers上で動作し、GitHubにpushすると自動デプロイされます。

**公開URL:** https://my-blog.picbig25.workers.dev/

---

## 技術スタック

- [Astro](https://astro.build/) — 静的サイトジェネレーター
- Cloudflare Workers — ホスティング（無料）
- GitHub連携 — pushで自動デプロイ

---

## ディレクトリ構成

```
src/
├── content/
│   └── posts/        # 記事ファイル（.md）
├── pages/            # ページ（index, about, contact など）
├── layouts/          # ベースレイアウト
├── components/       # 共通コンポーネント
└── config.ts         # サイト設定（タイトル・著者名など）
```

---

## 記事の追加方法

`src/content/posts/` に `.md` ファイルを作成します。

```markdown
---
title: 記事タイトル
description: 説明文（トップページや検索結果に表示）
pubDate: 2026-06-17
tags:
  - タグ1
  - タグ2
---

本文をここに書く。
```

ファイルを保存してGitHubにpushすると自動でデプロイされます。

---

## サイト設定の変更

`src/config.ts` を編集するとサイト名・著者名・プロフィールなどを変更できます。

---

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:4321 で確認
npm run build    # 本番ビルド（distフォルダに出力）
```
