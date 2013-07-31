
Ext.define('bis.controller.Viewport', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        this.control({
             'viewport': {
                 render: this.onViewportRendered
            }
        });
    },

    onViewportRendered: function(p) {
        // global variable userid ref: index.php
        if (userid == 0) {
            Ext.create('bis.view.Login',    {id: 'loginform'}).show();    
        } else {
            p.add(Ext.create('bis.view.Header'),
                Ext.create('bis.view.Footer'),
                Ext.create('bis.view.Menu'),
                Ext.create('bis.view.Content')
             ); 
            p.doLayout();
        }
    }
});