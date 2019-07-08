/**
 * 
 */
Ext.define('RN.view.workspace.Main', {

    extend: 'Ext.Container',

    xtype: 'rn-workspace',

    layout: 'fit',

    controller: 'rn-workspace',
    viewModel: 'rn-workspace',

    bind: {
        style: 'padding-left:{sideMenuCalcWidth}px'
    },

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
                bind: {
                    title: 'Settings - {route}'
                },

                responsiveConfig: {
                    small: {
                        top: 0,
                        width: '100%',
                        minWidth: null,
                        maxWidth: null,
                        shadow: false,
                        padding: 40
                    },
                    large: {
                        top: null,
                        width: '60%',
                        height: null,
                        minWidth: 200,
                        maxWidth: 340,
                        shadow: true,
                        padding: 20
                    }
                }
            }
        }
    ]

});

