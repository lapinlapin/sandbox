modules.define('sandbox', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function(provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._content = this.findBlocksInside('content');
                    }
                }
            },

            _reDraw : function() {
                var info = {};

                this._content.forEach(function(content) {
                    info[content._type] = content.getVal();
                });
                BEMDOM.append(this.domElem, BEMHTML.apply(new Function('return ' + info.BEMJSON)()));
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype._reDraw);
            }
        }));

    });
