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

        _clearSelected : function() {
            this.blocksWithContent.forEach(function(block) {
                block.delMod('selected');
            });

            this.elem('tab').each(function(key, elem) {
                this.delMod($(elem), 'selected');
            }.bind(this));

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
                var target = e.currentTarget;

                if(this.elem('tab', 'selected', true)[0] !== e.currentTarget[0]) {
                    this._onClick($(target).text());
                    this.setMod(target, 'selected');
                }
            });
        }
    }));

});
