/**
 * 
 */
Ext.define('RN.view.workspace.Settings', {

    extend: 'Ext.form.Panel',

    xtype: 'rn-workspace-settings',

    items: [
        {
            scrollable: true,
            width: '100%',
            height: 300,
            itemId: 'aaa',
            items: {
                style: {
                    background: 'url("https://image.shutterstock.com/z/stock-photo-cube-concrete-abstract-background-d-rendering-image-1033489816.jpg")'
                },
                width: 1000,
                height: 1000
            }
        },
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
