/**
 * 
 */
Ext.define('RN.view.workspace.Main', {

    extend: 'Ext.Container',

    xtype: 'rn-workspace',

    layout: 'fit',

    controller: 'rn-workspace',
    viewModel: 'rn-workspace',

    items: [
        {
            xtype: 'rn-workspace-side-bar',
            docked: 'left'
        },
        {
            xtype: 'rn-workspace-sub-menu',
            docked: 'left',
            bind: {
                padding: '0 0 0 {sideMenuCalcWidth}'
            }
        },
        {
            layout: 'center',
            items: {
                xtype: 'rn-workspace-settings',
                title: 'Settings',
                shadow: true,
                width: '60%',
                minWidth: 190,
                maxWidth: 300
            }
        }
    ]

});

