({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'js', url: 'second.bemhtml.js' },
        { elem: 'js', url: '_second.js' }
    ],
    mods: { theme: 'normal' },
    mix : { block : 'sandbox', js : true }
})
