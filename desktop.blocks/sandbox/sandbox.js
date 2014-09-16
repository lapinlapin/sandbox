modules.define('sandbox', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, $) {

        provide(BEMDOM.decl({ block : this.name }, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._fn = {
                            BEMJSON : function(bemjson) {
                                return BEMHTML.apply(new Function('return ' + bemjson)());
                            },
                            JS : function(js) {
                                sandbox.append('<script>' + js + '</script>');
                            }
                        };
                    }
                }
            }

        }, {
            live : function() {
                /*this.liveBindTo('click', function() {
                    this._onClick();
                });*/
                window.addEventListener('message', function() {
                      console.log(event.data);
                });
            }
        }));

    });
