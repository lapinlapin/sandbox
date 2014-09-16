modules.define('collector', ['i-bem__dom', 'jquery', 'BEMHTML'],

    function(provide, BEMDOM, $, BEMHTML) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        //var preview = this.findBlockInside('preview').domElem,
                          //  sandbox = this.domElem;

                        this._content = this.findBlocksInside('content');
                        /*this._fn = {
                            BEMJSON : function(bemjson) {
                                return BEMHTML.apply(new Function('return ' + bemjson)());
                            },
                            JS : function(js) {
                                sandbox.append('<script>' + js + '</script>');
                            }
                        };*/
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
                return values;
            },

            _sendInfo : function() {
                //var values = this._getInfo(),
                   // fn = this._fn;

               /* Object.keys(values).forEach(function(type) {
                    fn[type](values[type]);
                });*/
                this.findBlockInside('preview').domElem[0].contentWindow.postMessage(this._getInfo(), window.location);
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype._sendInfo);
            }
        }));

    });
