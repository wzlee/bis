
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
            p.add(Ext.create('bis.view.Login')); 
            p.doLayout(); 
        } else {
           // p.remove('bis.view.Login');
            p.add(Ext.create('bis.view.Header'),
                Ext.create('bis.view.Footer'),
                Ext.create('bis.view.Menu'),
                Ext.create('bis.view.Content')
             ); 
            p.doLayout();
        }
    }
});

