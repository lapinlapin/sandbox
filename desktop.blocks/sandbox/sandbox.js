modules.define('sandbox', ['i-bem__dom'/*, 'BEMHTML'*/],

    function(provide, BEMDOM/*, BEMHTML*/) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        var sandbox = this.domElem,
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
                                //BEMDOM.append(sandbox, BEMHTML.apply(new Function('return ' + bemjson)()));
                                sandbox.append(BEMHTML.apply(new Function('return ' + bemjson)())); // ??
                            },
                            JS : function(js) {
                                sandbox.append('<script>' + js + init + '</script>');
                            }
                        };

                        window.addEventListener('message', this.reDraw.bind(this));
                    }
                }
            },
            reDraw : function() {
                var data = event.data.sandbox,
                    fn = this._fn;

                if (data) {
                   Object.keys(data).forEach(function(type) {
                        fn[type](data[type]);
                   });
                }
            }
    }));

});
