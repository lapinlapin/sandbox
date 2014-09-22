({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' },
        { elem: 'js', url: '_ace.js' }
    ],
    mods: { theme: 'normal' },
    mix: { block: 'collector', js: true },
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
                    block : 'preview',
                    attrs : { src : '../second/second.html' }
                }
            ]
        }
    ]
})
