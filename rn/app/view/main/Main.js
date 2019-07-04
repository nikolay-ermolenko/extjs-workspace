/**
 * 
 */
Ext.define('RN.view.main.Main', {

    extend: 'Ext.Container',

    xtype: 'rn-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Center'
    ],

    controller: 'rn-main',
    viewModel: 'rn-main',

    bind: {
        style: 'padding-left:{sideMenuCalcWidth}px'
    },

    layout: 'center',

    items: [
        {
            xtype: 'rn-side-menu',
            docked: 'left'
        },
        {
            xtype: 'rn-sub-menu',
            docked: 'left',
            bind: {
                padding: '0 0 0 {sideMenuCalcWidth}'
            }
        },
        {
            xtype: 'rn-settings',
            title: 'Settings',
            shadow: true,
            width: '60%',
            minWidth: 190,
            maxWidth: 300
        }
    ]

});
