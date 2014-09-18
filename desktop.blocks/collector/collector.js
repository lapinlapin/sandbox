modules.define('collector', ['i-bem__dom', 'jquery', 'i-bem'],

    function(provide, BEMDOM, $, BEM) {

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

            sendInfo : function() {
                var values = this._getInfo();
                   // fn = this._fn;

               /* Object.keys(values).forEach(function(type) {
                    fn[type](values[type]);
                });*/
                if (values['BEMJSON']){
                    this.findBlockInside('preview').domElem[0].contentWindow.postMessage(this._getInfo(), window.location);
                }
                if (values['JS']) {
                //.append('<script>' + js + '</script>');
                var blocks = BEM.blocks;
                var a = "$('.preview')[0].contentWindow." + values['JS'];
                eval(a);

                BEM.blocks.forEach(function(block) {
                    if(blocks.indexOf(block) === -1) {
                        modules.require(block, function(){});
                    }
                });

                }
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype.sendInfo);
            }
        }));

    });
