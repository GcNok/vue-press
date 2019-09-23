---
title: React Native Tokyo
date: 2019-09-03
description: React Native Tokyo #6
categories:
  - js
footer: SmartShopping
author: shiji
authorImage: /gin.png
---

# React Native Tokyo #6

## react-native-unimodule のススメ

### スライド

https://speakerdeck.com/watanabeyu/react-native-unimodulesfalsesusume

https://github.com/unimodules/react-native-unimodules

expo にはネイティブ機能が含まれないデメリットがあるが react-native-unimodule でカバーができる

### expo のメリット

### expo

個々の SDK を react-native-unimodules から

以下コマンドでテンプレート付きで簡単にプロジェクトを開始

```sh
expo init --template bare-minimum
```

アプリ内課金もできるようになった

## expo と firebase の活用

https://speakerdeck.com/nabettu/03
https://comets.nabettu.com/

### アプリと Web で同じソースで動いている

### ReactNativeWeb

同じソースで Web とアプリを書ける

#### デメリット

- 出たばかりなので、Web サービスを作るのは危険

## セブ島でオフショアの話

- 安い
- 英語で喋れる
- 技術力が低い
- 古い技術を採用すべき
- アジャイルだとコミュニケーションがきつい

##　 ReactNative を Bitrise 上で UITest してみる
https://speakerdeck.com/t0m0120/reactnativeapuriwobitriseshang-deuitestsitemitahua

Button に transparent で Android32bit で落ちる

### UITest

- Firebase Test Lab
  - firebase のテストサービス？

### Bitrise Virtual Device Test

- UI テストが動画で確認できる
- スクショも見れる

## visual-regression test with react native

https://visual-regression-test-with-react-native.naturalclar.now.sh/

- 変更に自信が持てる
- レビューがしやすい

### reg-suit

https://github.com/reg-viz/reg-suit

画像の diff をレポートしてくれる

- PR に対してコメントしてくれる

## 株式会社ムゾウ

- Expo を使っている

### Expo のアップデート

ReactNative よりもはるかに簡単
package.json を更新するだけ

### ReactNative はアップデートがきつい

### v0.60 の注意点

### まとめ

- expo は最高
- firebase みんな使っている

## パネルディスカッション

### WebView

### AB テストのやりかた

- GoogleAnalytics を使う
  - GoogleAnalytics 上でアプリの計測をするのが終わりそう
    - https://support.google.com/analytics/answer/9167112?hl=jas
    - firebaseAnalytics があるらしい
- MixPanel を使う

### パフォーマンスチューニングについて

- ReactNative の公式についての記事がある
- エミュレータを開く
  - cmd + d で show Performance で見れる
  - 無駄なレンダーなどが起きていないかチェックする
- １番効果があったのは ReactNative のバージョンを上げたこと
  - マイナーバージョンを上げるだけでも結構違う
