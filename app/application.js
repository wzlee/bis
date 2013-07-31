Ext.define('bis.Application', {
    name: 'bis',
    extend: 'Ext.app.Application',
     views: [
        'Login', 
        'Viewport',
        'Header',
        'Menu',
        'Content',
        'Footer'
     ],


    controllers: [
        // TODO: add controllers here
        'Viewport',
        'Login',
        'Header'
    ],

    stores: [
        // TODO: add stores here
    ]

    
});
