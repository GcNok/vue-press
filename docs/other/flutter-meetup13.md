---
title: Flutter Meetup Tokyo#13
date: 2019-12-10
description: Flutter Meetup Tokyo#11
footer: SmartShopping
author: shiji
authorImage: /gin.png
---

# Flutter Meetup Tokyo#13
## Supernova StudioでFlutter爆速開発の夢を見れるか？
- Supernova Studio
  - SkechデザインからFlutterコードを自動生成できる
    - ネストがきつい
    - まだ挙動が怪しい？
https://webdesign-trends.net/entry/5697

## Flutterプラグインでdart:ffiを使ってみる	
- テンプレを作成
  - flutter create -t plugin hello_ffi
    - pluginを作るときはこんな感じ

https://flutter.dev/docs/development/platform-integration/c-interop

## Flutter desktop embedding for Linux
### Flutter desktop embedding
Flutterで書けるデスクトップアプリ
- まだ不安定で本番では使えない
  - Mac以外はデバッグモードしか使えない

## Desktop向け業務アプリでFlutterを採用しようとした話	
- ファイル選択
  - file_chooser
- mac環境は割と安定するが、Windows、Linuxは安定しない

## アプリ名を変更するプラグインを作った話
### FlutterのPlugin
- 一度公開すると削除できない
- 名前も変えれないので注意
- pub.devに公開
https://pub.dev/

## Atomic DesignをFlutterで作ってみた
- 状態管理がバケツリレーになるのできつい
  - 再利用を諦めた


## そのアプリ文字サイズでかくてUI崩れないですか？
https://docs.google.com/presentation/d/1hvSX3ZzXPZZr3HeoBNhJiqSff-bPPa-UhhszgmClN2Q/edit
- FlutterのDXが良すぎて感動
- FlutterにはTextSizeとは別にTextScaleFactorがある
  - 画面全体のテキストサイズを調整してくれる
    - 適用してほしくない場所にはtextScaleFactorの値を1にする