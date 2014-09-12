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
                }
            }
        },
        getVal : function() {
            return this.editor.getValue();
        }
    }));

});
