/**
 * 
 */
Ext.define('RN.view.workspace.Settings', {

    extend: 'Ext.form.Panel',

    xtype: 'rn-workspace-settings',

    items: [
        {
            xtype: 'mt-button',
            text: 'Add User'
        },
        {
            xtype: 'mt-button',
            text: 'DEl User',
            listeners: {
                click: () => console.log(44444)
            }
        },
        {
            xtype: 'mt-button',
            bind: 'WDTH: {sideMenuWidth}',
        },
        {
            xtype: 'textfield',
            bind: '{subMenuState}'
        },
        {
            xtype: 'togglefield',
            bind: {
                value: '{darkModeCalc}',
                label: '{darkModeLabel}',
            }
        },
        {
            xtype: 'spinnerfield',
            bind: {
                label: '{sideMenuLabel}',
                value: '{sideMenuWidth}',
                minValue: '{sideMenuMinWidth}',
                maxValue: '{sideMenuMaxWidth}',
                stepValue: '{sideMenuStepWidth}'
            }
        }
    ]
});
