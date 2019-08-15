/**
 * 
 */
Ext.define('RN.view.workspace.Settings', {

    extend: 'Ext.form.Panel',

    xtype: 'rn-workspace-settings',

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'mt-button',
                    text: 'INC',
                    listeners: {
                        click(btn) {
                            var vm = btn.lookupViewModel();
                            vm.set('imgWidth', vm.get('imgWidth') + 40);
                            vm.set('imgHeight', vm.get('imgHeight') + 40);
                        }
                    }
                },
                {
                    xtype: 'mt-button',
                    text: 'DEC',
                    listeners: {
                        click(btn) {
                            var vm = btn.lookupViewModel();

                            if (vm.get('imgWidth') < 80) {
                                return;
                            }

                            vm.set('imgWidth', vm.get('imgWidth') - 40);
                            vm.set('imgHeight', vm.get('imgHeight') - 40);
                        }
                    }
                }
            ]
        },
        {
            scrollable: true,
            width: '100%',
            height: 300,
            layout: 'vbox',
            items: [{
                style: {
                    backgroundImage: 'url("https://image.shutterstock.com/z/stock-vector-abstract-hexagon-background-technology-polygonal-design-digital-futuristic-minimalism-vector-490655017.jpg")',
                    backgroundSize: 'cover'
                },
                bind: {
                    width: '{imgWidth}',
                    height: '{imgHeight}'
                }
            },{
                style: {
                    backgroundImage: 'url("https://image.shutterstock.com/z/stock-photo-abstract-background-of-acrylic-paint-in-color-tones-1456636829.jpg")',
                    backgroundSize: 'cover'
                },
                bind: {
                    width: '{imgWidth}',
                    height: '{imgHeight}'
                }
            }]
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
