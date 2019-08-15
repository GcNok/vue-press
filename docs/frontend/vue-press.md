# VuePress x Firebase で作るエンジニアブログ

## VuePress とは

Vue の始祖こと Evan You 氏が新たに始めた Vue による静的サイトジェネレーターです。
Markdown によるページの作成が可能で、Vue の機能はもちろん、Web サイトを作っていてほしくなるシンタックスハイライトや、PWA のサポートがされています。
雑な解釈としては Vue 版の Gatsby という認識で良いのではないのかと思います。

## 環境構築
```sh
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```
### package.jsonに以下の内容を追加
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## ナビバー


## サイドバー
