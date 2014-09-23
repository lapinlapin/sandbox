modules.define('content', ['i-bem__dom'],

    function(provide, BEMDOM) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var editorConf = this.__self.editorConf;

                    this._type = this.domElem.attr('id');
                    this.editor = ace.edit(this._type);
                    this.editor.setTheme('ace/theme/clouds');
                    this.editor.setShowPrintMargin(false);

                    if(editorConf[this._type]) {
                        this.editor.getSession().setMode('ace/mode/' + editorConf[this._type].syntax);
                        this.editor.setValue(editorConf[this._type].snippet);
                    }
                }
            }
        },
        getVal : function() {
            return this.editor.getValue();
        }
    }, {
        editorConf : {
            BEMJSON : {
                syntax : 'javascript',
                snippet : '[\n    {\n        block : \'\'\n    }\n]\n'
            },

            CSS : {
                syntax : 'css',
                snippet : '. \n{\n    \n}\n'
            },

            JS : {
                syntax : 'javascript',
                snippet : "modules.define('', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {\n    provide(BEMDOM.decl({ block : this.name }, {\n        \n    }, {\n        \n    })); \n});\n"
            },

            BEMHTML : {
                syntax : 'javascript',
                snippet : "block('')(\n    \n);\n"
            }
        }
    }));

});
