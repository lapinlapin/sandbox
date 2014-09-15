({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index/_index.css' }
    ],
    scripts: [
        { elem: 'js', url: 'index/_index.js' },
        { elem: 'js', url: 'http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js' },
        { elem: 'js', url: 'index/index.bemhtml.js' }
    ],
    mods: { theme: 'normal' },
    mix: { block: 'sandbox', js: true },
    content: [
        {
            block : 'header',
            content : [
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'l' },
                    text : 'Просмотр'
                }
            ]
        },
        {
            block : 'wrapper',
            content : [
                {
                    block : 'options',
                    name : 'tab1',
                    content : [
                        {
                            block : 'tabs',
                            content : [
                                {
                                    title : 'BEMJSON'
                                }
                            ]
                        },
                        {
                            block : 'tabs',
                            content : [
                                {
                                    title : 'CSS'
                                },
                                {
                                    title : 'JS'
                                }
                            ]
                        },
                        {
                            block : 'tabs',
                            content : [
                                {
                                    title : 'BEMHTML'
                                },
                                {
                                    title : 'BH'
                                }
                            ]
                        },
                        {
                            block : 'tabs',
                            content : [
                                {
                                    title : 'BEMTREE'
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'preview'
                }
            ]
        }
    ]
})
