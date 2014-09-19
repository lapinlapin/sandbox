modules.define('content', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, $) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this._type = this.domElem.attr('id');
                    this.editor = ace.edit(this._type);
                    this.editor.setTheme("ace/theme/clouds");
                    this.editor.getSession().setMode("ace/mode/javascript");
                    this.editor.setShowPrintMargin(false);

                    this.snippetTech = {
                        BEMJSON : '[\n    {\n        block : \'block\'\n    }\n]\n',
                        CSS : '.block\n{\n    \n}\n',
                        JS : "modules.define('block', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {\n    provide(BEMDOM.decl({ block : this.name }, {\n\n    }, {\n\n    })); \n});\n",
                        BEMHTML : "block('block')(\n    \n);\n"
                    };

                    this.editor.setValue(this.snippetTech[this._type]);
                }
            }
        },
        getVal : function() {
            return this.editor.getValue();
        }
    }));

});
