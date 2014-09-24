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
                    var val = content.getVal(),
                        type = content._type;

                    val && val !== this._editorConf[type].snippet && (values[type] = val);
                }.bind(this));

                return values;
            },

            sendInfo : function() {
                var values = this._getInfo();

                values && this._preview.postMessage({ sandbox : values }, location);

                return this;
            }

        }, {
            live : function() {
                this.liveInitOnBlockInsideEvent('click', 'button', this.prototype.sendInfo);
            }
        }));

    });
