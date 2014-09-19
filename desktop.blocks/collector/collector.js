modules.define('collector', ['i-bem__dom'],

    function(provide, BEMDOM) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._content = this.findBlocksInside('content');
                        this._preview = this.findBlockInside('preview').domElem[0].contentWindow;
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
                this._preview.postMessage({ sandbox : this._getInfo() }, window.location);
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype.sendInfo);
            }
        }));

    });
