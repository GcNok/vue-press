module.exports = {
    title: 'エンジニアブログ',
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
                text: 'トップ',
                link: '/'
            }, {
                text: '会社概要',
                link: '/corporaite'
            },
            {
                text: '採用',
                link: '/guide/'
            },
            {
                text: 'アクセス',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese'
                    }
                ]
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
                    '/serverside/docker-study',
                ]
            }
        ]
    }
}