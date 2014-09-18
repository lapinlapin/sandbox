modules.define('sandbox', ['jquery', 'i-bem__dom'/*, 'BEMHTML'*/],

    function(provide, $, BEMDOM/*, BEMHTML*/) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        var sandbox = this.domElem;

                        this._fn = {
                            BEMJSON : function(bemjson) {
                                //sandbox.append(BEMHTML.apply(new Function('return ' + bemjson)()));
                                BEMDOM.init($(BEMHTML.apply(new Function('return ' + bemjson)())).appendTo(sandbox))
                            },
                            JS : function(js) {
                                sandbox.append('<script>' + js + '</script>');
                            }
                        };
                        window.addEventListener('message', this.reDraw.bind(this));
                    }
                }
            },
            reDraw : function() {
                var data = event.data,
                    fn = this._fn;
                if (typeof data === 'object' && data['BEMJSON']) {
                   // Object.keys(data).forEach(function(type) {
                     //   fn[type](data[type]);
                    //});
                    fn['BEMJSON'](data['BEMJSON']);
                  //  fn['JS'](data['JS']);
                }
            }
    }));

});
