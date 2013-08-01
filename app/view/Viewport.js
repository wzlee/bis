Ext.define('bis.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[    
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'bis.view.Header',
        'bis.view.Menu',
        'bis.view.Footer'
    ],

    layout: {
        type: 'border'
    }

});

