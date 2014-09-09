({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index/_index.css' }
    ],
    scripts: [{ elem: 'js', url: 'index/_index.js' }],
    mods: { theme: 'normal' },
    content: [
        {
            block : 'header',
            content : [
                {
                    elem : 'title',
                    content : 'SANDBOX'
                }
            ]
        },
        {
            block : 'options',
            content : [
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', type : 'textarea' },
                    placeholder : 'BEMJSON'
                },
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', type : 'textarea' },
                    placeholder : 'CSS'
                },
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', type : 'textarea' },
                    placeholder : 'JS'
                }
            ]
        }
    ]
})
