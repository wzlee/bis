Ext.application({
    name: 'bis',
    extend: 'bis.Application',
 
    launch: function() {
        Ext.tip.QuickTipManager.init();
        Ext.create('bis.view.Viewport', {id: 'viewport'});
    },
    
    autoCreateViewport: false
});
