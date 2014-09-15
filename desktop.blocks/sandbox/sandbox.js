modules.define('sandbox', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function(provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        var domElem = this.domElem;

                        this._content = this.findBlocksInside('content');
                        this._fn = {
                            BEMJSON : function(bemjson) {
                                BEMDOM.append(domElem, BEMHTML.apply(new Function('return ' + bemjson)()));
                            }
                        };
                    }
                }
            },

            _getInfo : function() {
                var values = {};

                this._content.forEach(function(content) {
                    var val = content.getVal();
                    if(val) {
                        values[content._type] = val;
                    }
                });
                return info;
            },

            _reDraw : function() {
                var values = this._getInfo(),
                    fn = this._fn;

                Object.keys(values).forEach(function(type) {
                    fn[type](values[type]);
                });
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype._reDraw);
            }
        }));

    });
