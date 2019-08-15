module.exports = {
    title: 'Smart Shopping',
    description: 'スマートショッピングのエンジニアブログです',
    head: [
        ['link', {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }]
    ],
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
        sidebar: [{
                title: 'フロントエンド',
                children: [
                    '/frontend/v-tokyo',
                    '/frontend/ng-japan',
                    '/frontend/ChromeTechTalkNight',
                    '/frontend/vue-press',
                ]
            },
            {
                title: 'サーバーサイド',
                children: [
                    '/serverside/P++',
                ]
            },
            {
                title: 'インフラ',
                children: [
                    '/infra/AWSPersonalize'
                ]
            }
        ]
    }
}