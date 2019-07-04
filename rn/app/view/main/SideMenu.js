/**
 * 
 */
Ext.define('RN.view.main.SideMenu', {

    extend: 'Ext.Toolbar',

    xtype: 'rn-side-menu',

    reference: 'workspace-side-menu',

    floated: true,
    height: '100%',
    hidden: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bind: {
        width: '{sideMenuCalcWidth}'
    },
    defaults: {
        ripple: true
    },

    items: [
        {
            iconCls: `${Ext.baseCSSPrefix}fa fa-home`,
            handler: 'toggleMainMenu'
        },
        {
            xtype: 'menuseparator'
        }
    ]
});
