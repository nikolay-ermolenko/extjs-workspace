/**
 * 
 */
Ext.define('RN.view.workspace.SideBar', {

    extend: 'Ext.Toolbar',

    xtype: 'rn-workspace-side-bar',

    reference: 'workspace-side-bar',

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
        },
        {
            xtype: 'spacer',
            ripple: false
        },
        {
            xtype: 'menuseparator'
        },
        {
            iconCls: `${Ext.baseCSSPrefix}fa fa-sign-out`,
            handler() {
                const subMenu = this.lookupReferenceHolder().lookupReference('workspace-sub-menu');
                subMenu.destroy();
                Ext.RC.logout();
            }
        }
    ]
});
