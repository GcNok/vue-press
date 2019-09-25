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
        lastUpdated: 'Last Updated',
        nav: [{
                text: 'ホーム',
                link: '/'
            }, {
                text: '会社概要',
                link: 'https://smartshopping.co.jp/AboutUs'
            },
            {
                text: '採用情報',
                link: 'https://smartshopping.co.jp/Recruitment'
            },
            {
                text: 'ニュース',
                link: 'https://smartshopping.co.jp/News'
            }
        ],
        sidebar: [{
                title: 'フロントエンド',
                children: [
                    '/frontend/v-tokyo',
                    '/frontend/NuxtMeetup_9',
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
            },
            {
                title: 'その他',
                children: [
                    '/other/vscode'
                ]

            }
        ],
        algolia: {
            appId: "HGN4J6EW6E",
            apiKey: "f9bd7d98b7c512f47857dba7207a4d8b",
            indexName: "vuepress"
        }
    },
    markdown: {
        lineNumbers: true
    }
}