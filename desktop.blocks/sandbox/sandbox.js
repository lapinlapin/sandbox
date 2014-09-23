modules.define('sandbox', ['i-bem__dom'],

    function(provide, BEMDOM) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        var sandbox = this._sandbox = this.domElem,
                            init = "modules.require(" +
                                        "['i-bem__dom_init', 'jquery', 'next-tick']," +
                                        "function(init, $, nextTick) {" +
                                            "$(function() {" +
                                                "nextTick(init);" +
                                            "});" +
                                        "}" +
                                    ");";

                        this._fn = {
                            BEMJSON : function(bemjson) {
                                sandbox.append(BEMHTML.apply(new Function('return ' + bemjson)()));
                            },

                            JS : function(js) {
                                sandbox.append('<script>' + js + init + '</script>');
                            },

                            CSS : function(css) {
                                sandbox.append('<style type="text/css">' + css + '</style>')
                            },
                            BEMHTML : function(bemhtml) {
                                sandbox.append('<script>' + 'function extendTemplates(' +
                                    'apply, applyNext, applyCtx, block, elem, tag, attrs, cls, js, jsAttr, bem, mix, content){' +
                                    '' + bemhtml + '}' + '</script>');
                            }
                        };
                        window.addEventListener('message', this.reDraw.bind(this));
                    }
                }
            },

            reDraw : function() {
                var data = event.data.sandbox,
                    fn = this._fn;

                if(data) {
                    BEMDOM.destruct(this._sandbox, true);
                    window.extendTemplates = function() {};
                    Object.keys(data).sort().forEach(function(type) {
                        fn[type](data[type]);
                    });

                    return this;
                }
            }
    }));

});
