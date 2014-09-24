modules.define('tabs', ['i-bem__dom'],

    function(provide, BEMDOM) {

    provide(BEMDOM.decl({ block : this.name }, {
        _clearSelected : function(selectedTab) {
            this
                .delMod(selectedTab, 'selected')
                .findBlocksInside('content').forEach(function(block) {
                    block.delMod('selected');
                });

            return this;
        },

        _onClick : function(title, selectedTab) {
            this
                ._clearSelected(selectedTab)
                .findBlockInside({ block : 'content', modName : 'box', modVal : title }).setMod('selected');

            return this;
        }

    }, {
        live : function() {
            this.liveBindTo('tab', 'click', function(e) {
                var target = e.currentTarget,
                    selectedTab = this.elem('tab', 'selected', true);

                if(selectedTab[0] !== target[0]) {
                    this
                        ._onClick(target.text(), selectedTab)
                        .setMod(target, 'selected');
                }
            });
        }
    }));

});
