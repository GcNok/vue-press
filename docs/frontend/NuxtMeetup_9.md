---
title: NuxtMeetUp#9 オールスターズ
date: 2019-08-26
description: Nuxtjs Meetup#9に参加した時のLTメモ
author: shiji
authorImage: /gin.png
sidebar: "test"
---

# Nuxtjs Meetup#9

## メルペイ フロントエンド

### C 向け

- キャンペーン
- クーポン
  :::tip
  - Nuxt を使用している
  - TypeScript も使用している
    :::

### プライベートレジストリ

共通機能をモノレポで管理

- プルリク
- コードレビュー
- GKE でビルド

## ROXX

Sardin という人材紹介サービス

- Nuxt を使用している

## LINE

- @potato4d
  Nuxt.js を SSR で使っている

### Nuxt.js における Docker 運用

#### 開発/本番両方で Docker 運用のつらい

- MultiStageBuild
  - Docker（2 年前）から追加された機能

#### Docker multi stage build on Nuxt.js

- 開発環境では開発環境向けのビルドステージで作業
- イメージサイズ削減で使われる multi stage build は Nuxt.js でも嬉しい
  - 全て Docker 化するときの謎の条件分岐がへる

#### みんな MultiStageBuild 使おう

- Nuxt オンリーの環境では開発環境に Docker はファイル I/O が遅くなるためいらないのでは

## Nuxt.js+TypeScript のベストプラクティスを考えてみる

サイバーエージェント
@yuit1552

### API の使用方法のベストプラクティス

- CORS を回避したい
- http-only
  :::tip 結論
  Nuxt.js で BFF を持つのがいい
  :::

### ServerMiddleware

## テスト

### テストコードを各目的

- 検証を楽にする

- Snapshot でのテスト
- Storybook でのテスト
  ::: warning 注意
  フロントエンドのテストは難しい
  :::

### SnapShot テスト の概要

- jest を使用する
  - UI の変更があった場合、テストは失敗する
  - StoryBook と組み合わせると便利

### Component の設計・テストで意識すること

- ロジックはできるだけ Vuex に書く

### Vuex のテスト

- 最低限必要なテストは action のテスト

### getter のテスト

- テストを書くことは比較的簡単

### mutatation のテスト

- テストを書くことは比較的簡単

### E2E テスト

- テスト自体は比較的簡単だがメンテナンスコストが高い
- 操作が複雑な正常系のテストだけ書くのがいい

::: tip TestCafe がおすすめ

- テストに利用するブラウザを実行時の引数で選択することができる
- Web ドライバーを入れる必要がない
  :::

### まとめ

::: tip まとめ

- SnapShot は必ず実装する
- E2E テストはメンテナンスコストは高いが効果も高いので、重要なポイントのみ実装する
  :::

## note の頑張らない AtomicDesign

@nicedchy

### 伝えたいこと

- プロダクト開発の共通言語

### AngularJS 時代はどうだったのか

- directive を利用した、コンポーネントベース
- 粒度にルールがなく

### Nuxt.js と AtomicDesign

- Atomic Design は関わる人によってそれぞれ認識がかわってしまうもの

### note にとって Atomnic Design はどうだったのか

- atoms しか意識していない

### まとめ

- プロダクト開発の「共通言語を「作るもの
  - 誰かが頑張って管理するものじゃない
- 最初から上手くやろうとしない
  - プロダクトは研ぎ澄ましていくもの
- 基礎の定義はしっかりやろう
  - トライアンドエラーで下地を作っていこう

## 管理画面を 3 つのマイクロサービスに分割した話

### メルペイの管理画面

- お客様管理画面
- 加盟店管理画面
- 設定画面

### PublicPath を変更

### 2 段階リリース

- Nginx で routing
- API GateWay で routing

#### Canary Release

- ダウンタイムを極力短くするため
- routing 設定が必要

## Nuxt+TypeScriiipt

@daijiro_ma

- 株式会社テックピット（ガイアックスの子会社）
  CtoC サービス

### TypeScript を使うのをやめた

### 前提

- 事業の初期フェーズである
- フルタイムのエンジニアが少ない

### 実際どうだったか

- スピードを優先すると部分的に必要な型にしてしまうため、恩恵が得られなかった -　型付き言語に不馴れで工数がかかる

### Vuex だけは ts をやめなかった

- API から持ってきたデータは共通で使われるため、整合性の検証が必要だった

### TypeScript を導入するタイミング

- 事業フェーズ
- 開発チームの状態

## Function API

@ushironoko

### vue-function-api

- 関数ベースでコンポーネントが書ける API
  - Vue の 3 系からコアに入る

### Functino API 所感

- this とおさらばできる
- 処理をコンポーネントから抽出できる

### Nuxt と FunctionAPI

- Object API とキメラにする

### まとめ

- NUXT でも plugins で登録すれば使える
- コンポーネントを返さない純粋な関数としても利用可能
