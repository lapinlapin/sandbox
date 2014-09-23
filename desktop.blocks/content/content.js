modules.define('content', ['i-bem__dom'],

    function(provide, BEMDOM) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var editorsConf = this.__self.editorConf,
                        type = this._type = this.domElem.attr('id'),
                        editor = this.editor = ace.edit(type),
                        conf = editorsConf[type];

                    editor.setTheme('ace/theme/clouds');
                    editor.setShowPrintMargin(false);

                    if(conf) {
                        editor.getSession().setMode('ace/mode/' + conf.syntax);
                        editor.setValue(conf.snippet);
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
