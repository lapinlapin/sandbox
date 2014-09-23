modules.define('collector', ['i-bem__dom'],

    function(provide, BEMDOM) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._content = this.findBlocksInside('content');
                        this._editorConf = this._content[0].__self.editorConf;
                        this._preview = this.findBlockInside('preview').domElem[0].contentWindow;
                    }
                }
            },

            _getInfo : function() {
                var values = {};

                this._content.forEach(function(content) {
                    var val = content.getVal();

                    if(val && val !== this._editorConf[content._type].snippet) {
                        values[content._type] = val;
                    }
                }.bind(this));

                return values;
            },

            sendInfo : function() {
                var values = this._getInfo();

                if(values) {
                    this._preview.postMessage({
                        sandbox : values
                    }, window.location);
                }

                return this;
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype.sendInfo);
            }
        }));

    });
