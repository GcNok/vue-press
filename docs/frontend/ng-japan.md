---
title: ng-japan
date: 2019-07-13
description: ng-japanに参加した時のLTメモ
---
# ng-japan

## bitbank

仮装通過取引書
Battle Conference で優勝
Angular 製

## TORETA

飲食向け予約管理

## MicroFrontend

### Lifecycle

1. エレメントが作成される
2. 属性が付与される
3. テキストが挿入される

## Ignite UI for Angular

- Angular の 100 種類以上の軽量コンポーネントを提供
- 大量のデータを高速で表示できる
- コミュニティや個人なら無料

## Capacitor をつかって Angular アプリの可能性を広げよう

###

- Ionic
- capacitor
- Payment Request API
- ネイティブアプリが簡単に作れる
- ng add

## 川上さん

### Angular でメトロノームを作った話と、 Angular + pixi JS でメトロノームにオープニングをつけた話

- Web AudioAPI
- Pixy.js

## 野原さん

### モバイル

- ionCity
  - アプリストア

## AzureDevOps × BrowserStack × Angular

- モダナイゼーション
- UI テストを Protractor で自動化
- クラウドテスティング環境の BrowserStack を導入
  - OS・ブラウザバリエーションが豊富
- Azure Pipelines を導入（CI/CD）
- ng e2e

## NestJS + TypeORM + Angular で作る Pure TypeScript なアーキテクチャ

- Angular はデフォルトで CSS がコンポーネントスコープ
- DI ができる

### Ionic

- Angular ベースの UI フレームワーク
- 多数のコンポーネントがデフォルトで用意
- Ionic で WebComponent が用意されている
  - ネイティブっぽい UI
  - 重い

### UI フレームワーク

- 工数が少ない
- デザインのカスタマイズ性が低い
  - コンポーネントベースでデザインすべき
- Stencil
- Capacitor
  - Cordova の代替

### Cordova

- 揺らぎやすい
- バージョンアップが辛い

### ハイブリッドアプリ

- パフォーマンスについて
  - iPhoneX だと問題なし
- iOS、Andoroid 向きに UI を自動で切り替えてくれるがデザイナーの要望でカスタマイズができなくなる

### ディレクトリ構成を変えた

- 古いコードを\_legacy というディレクトリに突っ込んだ

### NestJS

- TypeScript ベースのサーバーサイドフレームワーク
  - デコレーターで宣言的に API が使える
  - @Body をつけていれば JSON のパースをする必要がない

### TypeORM

- デコレーターの活用
- ActiveRecord パターンも Repositry も対応

### monorepo

- 1 つのリポジトリに複数のモジュールを管理
- Lerna
  - Node.js 開発向け monorepo 管理ツール

## Building a Fast & SEO Friendly SPA with Angular

- SPA
- Firebase

- netlify

### SPA の SEO 問題

#### 解決策

- Puppeteer で最終結果を取得している

### Sitemap はまだ必要

### Colabo

- npm install -D Hasky
- CI/CD は travis

### パフォーマンス

- ページスピードは SEO に影響がある
- lighthouse を使いましょう
- SVG の最適化
  - SVGOMG
    - 10 分の 1 ぐらいの容量になる
- WebP

  - 主要ブラウザでは使われている
  - .png と.webp だと 10 倍ぐらい容量が違う
  - ブラウザがサポートしている
    くなら webp を使った方がいい
  - 画質は 80%あれば認識できる
  - squoosh.app
```css
font-display: swap;
display: swap;
```
- angular は head より body でフォントを読み込んだ方がいい
- js は defer を使う方がいい（script defer）
- global css は最小化
