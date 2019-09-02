---
title: VuePress x Firebase で作るエンジニアブログ
date: 2019-08-15
description: VuePress x Firebaseでブログ作成に挑戦してみました。
categories:
  - Vue.js
footer: SmartShopping
author: shiji
authorImage: /gin.png
---

<Author />
# VuePress x Firebase で作るエンジニアブログ

## VuePress とは

Vue による静的サイトジェネレーター。
Markdown によるページの作成が可能で、Vue の機能はもちろん、Web サイトを作っていてほしくなるシンタックスハイライトや、PWA のサポートがされている。
雑な解釈としては Vue 版の Gatsby。

## VuePress の機能

- 技術ドキュメントに適したマークダウン拡張
- マークダウン内から Vue コンポーネントの呼び出しが可能
- デフォルトテーマ
  - レスポンシブなレイアウト
  - 記事検索機能
    - デフォルトでは h1、h2 タグの検索だが、設定すれば Algolia による全文検索も可能
- PWA のサポート

## 環境構築

```sh
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

### package.json に以下の内容を追加

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## ホームページのコード例

```md
---
home: true
heroImage: /logo.png
actionText: About Engineering
actionLink: /frontend/
features:
  - title: フロントエンド
    details: Vue、Angular、AMP
  - title: サーバーサイド
    details: Go、Laravel、CakePHP
  - title: インフラ
    details: AWS、Azure、Kubernetes
footer: SmartShopping
---

# 記事一覧

<PostList />
```

## 記事ページのコード例

```md
---
title: ChromeTechTalkNight#14
date: 2019-07-26
description: ChromeTechTalkNight#14に参加した時の備忘録
author: shiji
authorImage: /gin.png
---

<Author />
# ChromeTechTalkNight#14
AMPScript で書いた js マルチスレッドで動く
AMP は Google 検索時に既にレンダリングの準備をしているため、高速なページが実現できる
AMP Script はタグで囲まれた範囲の DOM にのみ有効（sandbox のような環境）
AMPScript の上限は 150KB（全ての AMPScript の合計）
５秒以内に処理が完了すること

## Feature Policy
```

## ナビバーの実装

config.js に以下の記述を追加する

```js{2-17}
themeConfig: {
        nav: [{
                text: 'ホーム',
                link: '/'
            }, {
                text: '会社概要',
                link: 'https://smartshopping.co.jp/overview/'
            },
            {
                text: '採用情報',
                link: 'https://smartshopping.co.jp/recruiting/'
            },
            {
                text: 'ニュース',
                link: 'https://smartshopping.co.jp/category/news/'
            }
        ],
}
```

## サイドバーの実装

config.js に以下の記述を追加する

```js{2-20}
themeConfig: {
  sidebar: [
    {
      title: "フロントエンド",
      children: [
        "/frontend/v-tokyo",
        "/frontend/ng-japan",
        "/frontend/ChromeTechTalkNight",
        "/frontend/vue-press"
      ]
    },
    {
      title: "サーバーサイド",
      children: ["/serverside/P++"]
    },
    {
      title: "インフラ",
      children: ["/infra/docker-meetup"]
    }
  ];
}
```

## マークダウンの拡張

### TIPS

```
::: tip
こんな感じに書くとtipsが書けます
:::
```

::: tip
こんな感じに書くと tips が書けます
:::

### WARNING

```
::: warning
こんな感じに書くとwarningが書けます
:::
```

::: warning
こんな感じに書くと warning が書けます
:::

### DANGER

```
::: danger
こんな感じに書くとdangerが書けます
:::
```

::: danger
こんな感じに書くと danger が書けます
:::

### その他

```
::: tip テストタイトル
こんな感じに書くとタイトルも書けます
:::
```

::: tip テストタイトル
こんな感じに書くとタイトルも書けます
:::

## 検索バーについて

- デフォルトではタイトルと h2/h3 のみが検索対象となる
- 設定すれば algolia という全文検索エンジンサービスを利用することができる
  - 「algolia サーバにブログやドキュメントなどのコンテンツデータをアップすると、そのデータを全文検索する API を利用できる」といった感じのもの

### Algolia の特徴

- 検索がとにかく早い
- 自動でタイポの名寄せをしてくれる（Noed を Node として解釈可能）
- バックエンド、フロントエンド共にライブラリが充実
- フィールドの重み付けなどのパラメータ調整をコード変えずに対応可能
- プランが柔軟

#### こんな感じに表示されるらしい

<img :src="$withBase('/algolia.png')" alt="algolia">

### Algolia の導入例

- Twitch
- Periscope
- Stripe
