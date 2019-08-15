---
title: v-tokyo
date: 2019-07-29
description: v-tokyoでのLTメモ
author: shiji
authorImage: /gin.png
---
<Author />
# v-tokyo

## DMM GAMES Ventures を Nuxt でリニューアルした話

- 対象の箇所を no-ssr で囲むことで SSR されなくなる

### Nuxt を使ってよかったこと

- 開発環境構築にかける工数を削減
- 共通 UI のコンポーネント化
- scoped
- typescript

結論 Nuxt というより Vue がよかったということを言ってそう

## コンポーネントの分割、責務/粒度/分類に向き合う

スライド
https://slides.com/nakajmg/okimochi-component/#/5

- this に何かを生やすのは基本的によろしくない。
- vuex で使わない getters を定義しすぎるとパフォーマンスに支障が出る
- 用途ごとにディレクトリを切って共通化する
  https://note.mu/ryopan/n/n5663632cc48e
- デザイン設計
  - Identity / Elements / Components / Compositions / Layout / Pages

Atomic Design が基本採用されるがそれに加えてチーム間でルールを決めて、共通の認識を作ろうという話

## なぜから始める、現場の Vue.js アプリの自動テスト

- BDD のように、テストケースで要求仕様で言語化する
- Visual Regression Testing を導入する
- zisui(Pupettier をラッパーしたテストツール)

* 見た目の検証の安心感が増す
  - Storybook を使うことで、UI のエッジケースも検証できる
  - .toContain()などで検証するのに比べて、表示位置やスタイルも検証できる
* デザイナーとの協業がしやすい
  - テストコードをデザイナーが直すのは難しいが、VRT なら見た目で可否を判断できる
* Storybook が拡充できるので、見た目のドキュメントができる

- ESLint、TypeScript

https://qiita.com/Quramy/items/e65ee58cf1fba589c81b

## TDD

vue-testing-liblary

### zisui

https://qiita.com/hey_cube/items/fbeab4302cfb617cf941
