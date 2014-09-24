modules.define('tabs', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, $) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.blocksWithContent = this.findBlocksInside('content');
                }
            }
        },

        _clearSelected : function(selectedTab) {
            this.blocksWithContent.forEach(function(block) {
                block.delMod('selected');
            });
            this.delMod(selectedTab, 'selected');

            return this;
        },

        _onClick : function(title, selectedTab) {
            this
                ._clearSelected(selectedTab)
                .findBlockInside({ block : 'content', modName : 'box', modVal : title }).setMod('selected');
        }

    }, {
        live : function() {
            this.liveBindTo('tab', 'click', function(e) {
                var target = e.currentTarget,
                    selectedTab = this.elem('tab', 'selected', true);

                if(selectedTab[0] !== target[0]) {
                    this._onClick($(target).text(), selectedTab);
                    this.setMod(target, 'selected');
                }
            });
        }
    }));

});
