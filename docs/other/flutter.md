---
title: Flutter Meetup Tokyo#11
date: 2019-09-06
description: Flutter Meetup Tokyo#11
footer: SmartShopping
author: shiji
authorImage: /gin.png
---

# Flutter Meetup Tokyo#11

## 聞くこと

- ストアで不利とかあるのか？
- 実装できないネイティブ機能はあるか？

## Tech session - by Google

Zoey Fan

- Flutter のマネージャー

### Flutter の特徴

- Beautiful
  - ビルトインで綺麗な UI
- Fast
  - コンパイル言語
  - ホットリロードで開発効率が上がる（ビルドが速い）
- Producrive
  - シュミレータ出して開発してるっぽい
  - エディタは？
- Open
  - 無料

4 チームでつくっている

### Flutter の目的

Andoroid/iOS を同時に作りたい

- 現在成長中
  - 日本で Flutter ユーザーが 250%増

Alibaba や Google で採用されている

- Alibaba では普通に写真とか撮ってる
  開発ロードマップには Desktop や Web も入っている

```
Flutter for Mobile
Flutter for Web
Flutter for Desktop
Flutter for Embedded
```

### Flutter のコンテスト(5KB 以内でアプリを作るルール)

https://flutter.dev/create

## Flutter 製アプリのアクセシビリティ対応（音声読み上げ編)

https://speakerdeck.com/nanonano/screen-reading-in-flutter-app

### Semantics widget

- label
- excluteSemantics

SemanticsService の Anounce メソッドで音声の読み上げができる

### まとめ

- Flutter 製アプリはデフォルトで音声読み上げ機能が入っている
- デフォルトでできない部分は SemanticsService を使用する

## Getting Screenshots in Flutter

macs_6

https://twitter.com/macs_6/status/1169938753583890433

### 自動スクリーンショット

- ストアに載せるスクリーンショットとかに使う

### Golden files

- スクリーンショットを比較
- matchesGoldenFiles 関数でスクリーンショットと実際の画像を比較

以下コマンドでスクショが取れる

```sh
flutter test --update-goldens
```

sample_page.dart

- Rendeer app"s widgets
  - 自動でスクショをとるコードが書かれている

How to generate

```
git clone flutterリポジトリ
cd flutter/example/
```

- `flutter drive`コマンド
- driver.screeenshot()

### 結論

Flutter には自動でスクショを取れるようなコードがデフォルトである

## Mobile Recap from DroidconKE 2019

Android の開発者が 6 割ぐらい

### 効率のいい Flutter での開発

#### UI

FlutterStudio という UI ライブラリ

- st foo 　とか打つとテンプレートができる

## Release Flutter App （Video On Demand）

@tanaka_1899

## Flutter アプリをリリースした

https://speakerdeck.com/yumatan/release-flutter-app-video-on-demand

https://beyond.videomarket.jp/

videomarket というアプリ

- 世界初の VODFlutter アプリ
- ジェスチャーコントロールにも対応

### 技術面の特徴

- GCP
- GraphQL

- 課金とか音声再生は iOS で実装（既にネイティブで実装していたから使いまわした）
  - Flutter では DRM とかが不安だった

## Flutter を仕事で使いたい
