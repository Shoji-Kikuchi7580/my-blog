import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  singletons: {
    profile: singleton({
      label: 'プロフィール・サイト設定',
      path: 'src/content/profile',
      schema: {
        siteTitle: fields.text({
          label: 'サイト名',
          defaultValue: 'MY BLOG',
        }),
        siteDescription: fields.text({
          label: 'サイト説明文（SEOに使われます）',
          multiline: true,
        }),
        authorName: fields.text({
          label: '名前',
        }),
        authorBio: fields.text({
          label: '自己紹介文',
          multiline: true,
        }),
        authorIcon: fields.text({
          label: 'アイコン（絵文字）',
          defaultValue: '🙂',
        }),
        email: fields.text({
          label: 'メールアドレス',
        }),
        topics: fields.array(
          fields.text({ label: 'トピック' }),
          { label: 'このブログで発信していること', itemLabel: props => props.value }
        ),
      },
    }),
  },

  collections: {
    posts: collection({
      label: '記事',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'タイトル' },
        }),
        description: fields.text({
          label: '説明文（SEO・記事一覧に使われます）',
        }),
        pubDate: fields.date({
          label: '公開日',
          defaultValue: { kind: 'today' },
        }),
        tags: fields.array(
          fields.text({ label: 'タグ' }),
          { label: 'タグ', itemLabel: props => props.value }
        ),
        content: fields.markdoc({
          label: '本文',
        }),
      },
    }),
  },
});
