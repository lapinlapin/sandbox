modules.define('tabs', ['i-bem__dom'],

    function(provide, BEMDOM) {

    provide(BEMDOM.decl({ block : this.name }, {
        _clearSelected : function(selectedTab, modName) {
            this
                .delMod(selectedTab, modName)
                .findBlockInside({ block : 'content', modName : modName, modVal : true }).delMod(modName);

            return this;
        },

        _onClick : function(title, selectedTab, modName) {
            this
                ._clearSelected(selectedTab, modName)
                .findBlockInside({ block : 'content', modName : 'box', modVal : title }).setMod(modName);

            return this;
        }

    }, {
        live : function() {
            this.liveBindTo('tab', 'click', function(e) {
                var target = e.currentTarget,
                    modName = 'selected',
                    selectedTab = this.elem('tab', modName, true);

                if(selectedTab[0] !== target[0]) {
                    this
                        ._onClick(target.text(), selectedTab, modName)
                        .setMod(target, modName);
                }
            });
        }
    }));

});
