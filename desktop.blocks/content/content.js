modules.define('content', ['i-bem__dom', 'jquery'],

    function(provide, BEMDOM, $) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.editor = ace.edit(this.domElem.attr('id'));
                    this.editor.setTheme("ace/theme/clouds");
                    this.editor.getSession().setMode("ace/mode/javascript");
                }
            }
    }
    }));

});
