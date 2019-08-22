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
            width: '100%',
            height: 300,
            layout: 'vbox',
            scrollable: true,
            defaults: {
                bind: {
                    width: '{imgWidth}',
                    height: '{imgHeight}'
                }
            },
            items: [{
                style: {
                    backgroundImage: 'url("https://image.shutterstock.com/z/stock-vector-abstract-hexagon-background-technology-polygonal-design-digital-futuristic-minimalism-vector-490655017.jpg")',
                    backgroundSize: 'cover'
                }
            }, {
                style: {
                    backgroundImage: 'url("https://besthqwallpapers.com/img/download/22-8-2019/lines-4k-android-geometry-abstract-material-besthqwallpapers.com-1152x864.jpg")',
                    backgroundSize: 'cover'
                }
            }, {
                style: {
                    backgroundImage: 'url("https://avatars.yandex.net/get-music-content/114728/b2142ea6.a.6512155-1/m1000x1000")',
                    backgroundSize: 'cover'
                }
            }, 
            {
                xtype: 'grid',
                store: {
                    data: (() => {
                        const res = [];
                        for(var i = 0, l = 300; i < l; i++){
                            res.push({ id: i, name: `Item # ${i}` });
                        }
                        return res;
                    })()
                },
                columns: [
                    {
                        dataIndex: 'id',
                        text: 'ID',
                        width: 90
                    },
                    {
                        dataIndex: 'name',
                        text: 'Name',
                        flex: 1,
                        minWidth: 110

                    }
                ]
            }
            ]
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
