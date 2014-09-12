modules.define('button', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, $) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                }
            }
        },

        _onClick : function() {
            alert('привет это кнопка');
        }

    }, {
        live : function() {
            this.liveBindTo('click', function() {
                this._onClick();
            });
        }
    }));

});
