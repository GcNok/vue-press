---
title: ChromeTechTalkNight 14
date: 2019-07-26
description: AMP系LTメモ
---
# ChromeTechTalkNight#14
AMPScript で書いた js マルチスレッドで動く
AMP は Google 検索時に既にレンダリングの準備をしているため、高速なページが実現できる
AMP Script はタグで囲まれた範囲の DOM にのみ有効（sandbox のような環境）
AMPScript の上限は 150KB（全ての AMPScript の合計）
５秒以内に処理が完了すること

## Feature Policy

以下のような feature を制限することができる
iframe allow="geolocation"
camera
autoplay
display-capture
document-domain
fullscreeen
geolocation
layout-animation
lazyload

layout-animation
oversized images

- 大きすぎる画像について

  - Feature-images 'self'(2.0)
    - 制限した画像より崩れていたら placeholder を表示する

- 社内で開発中は FeaturePolicy を使って、本番環境では通常にしておけば気づくことができる

AMP はランタイムとネットワークを改善する

- 5G ネットワークでもブラウザ上のランタイムは変わらないため有効

## 一休

amp-iframe
amp-list

AMPFirst は SEO 的に問題なし
AMP ストーリーを量産

### AMP のトラッキングについて

AMPStories と LP(AMP)の連携

- 基本導線
  - 検索結果

不自然な直リンクがあったり困ることがあった

GoogleTagManager を使ったトラッキング

- GoogleAnalytics の Rollup
- cliantID 用の API の作成
- 広告掲載するためには originAMP を使う
- amp-pixel を使ったトラッキングができる

https://www.ikyu.com/kankou/story0/
KIWAMINO

AliExpress が AMP のいい例のサイト
