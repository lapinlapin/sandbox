modules.define('tabs', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, $) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.blocksWithContent = this.findBlocksInside('content');
                    this.tabCount = this.elem('tab').length;
                }
            }
        },

        _clearSelected : function() {
            this.blocksWithContent.forEach(function(block) {
                block.delMod('selected');
            });

            this.elem('tab').each(function(key, elem) {
                this.delMod($(elem), 'selected');
            }.bind(this))

            return this;
        },

        _onClick : function(title) {
            this
                ._clearSelected()
                .findBlockInside({ block : 'content', modName : 'box', modVal : title }).setMod('selected');
        }

    }, {
        live : function() {
            this.liveBindTo('tab', 'click', function(e) {
                if(this.tabCount > 1) {
                    this._onClick($(e.currentTarget).text());
                    this.setMod(e.currentTarget, 'selected');
                }
            });
        }
    }));

});
