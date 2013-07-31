Ext.define('bis.view.Login', {
    extend: 'Ext.window.Window',
    requires:[    
        'Ext.layout.container.Absolute',
        'Ext.toolbar.TextItem',
        'Ext.form.Label',
        'Ext.window.Window',
        'Ext.form.Panel'
    ],
    xtype: 'app-login',
    id: 'loginform',  
    title: '',
    height: 130,
    width: 300,
    ui: 'plain',
    draggable: false,
    resizable: false,
    closable: false,
    
    initComponent: function() {
    
       var toolbar = Ext.create('Ext.toolbar.Toolbar',{
            cls: 'icon-blue',
            items: [
            {
                xtype: 'tbtext',
                text:'<div style="height:16px;width:16px;background: url(\'resources/images/lock.png\')" align="right"></div>'
            },{
                xtype: 'label',
                style: { color: 'White'},
                text: 'APP TITLE'
            }]

        });

        var form = Ext.create('Ext.form.Panel', {
                layout: 'absolute',
                height: 130,
                defaultType:'textfield',
                bodyPadding: 5,
                monitorValid:true,
                items:[{ 
                        x: 10,
                        fieldLabel:'Username', 
                        name:'username',
                        labelWidth: 80,
                        width: 270,
                        allowBlank:false 
                    },{ 
                        x: 10, y: 35,
                        fieldLabel:'Password', 
                        name:'password', 
                        inputType:'password', 
                        labelWidth: 80,
                        width: 270,
                        allowBlank:false 
                    },{ 
                        xtype: 'button',
                        x: 225, y: 65,
                        text:'Login',
                        formBind: false,
                        action: 'login',
                        iconCls: 'icon-key'
                    }]
            });

        this.items = [toolbar,form]
        this.callParent(arguments); 

    }
    
   
});