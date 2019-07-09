/**
 * 
 */
Ext.define('RN.view.workspace.Settings', {

    extend: 'Ext.form.Panel',

    xtype: 'rn-workspace-settings',

    
    controller: {

        // bindings: {
        //     onRouteChange: '{getParentRoute}'
        // },
        // onRouteChange(a) {
        //     console.log('settings', a);
            
        // },
    


        // routes: {
        //     ':section': {
        //         action: 'onNavigate',
        //         // before: 'onBeforeNavigate',
        //         conditions: {
        //             ':section': '([%a-zA-Z0-9\\./]+)'
        //         }
        //     }
        // },

        // onNavigate(appHash) {
        //     console.log('settings', appHash);
            

        // },

        onPagesNavigate(appHash) {
            console.log(5555, 'settings');

            // this.getView().lookupReference('aaContainer').removeAll(true);
            this.getView().lookupReference('aaContainer').add({
                xtype: 'panel',
                title: 'INNER',
                controller: {

                    routes: {
                        'subpage': {
                            // action: 'onPagesNavigate',
                            // before: 'onBeforeNavigate'
                        },
                        'subpage/': {
                            // action: 'onPagesNavigate',
                            // before: 'onBeforeNavigate'
                        }
                    },

                },
                items: [
                    {xtype: 'button', text: 'SUBPAGE',
                    handler: (btn) => {
                        console.log(btn);
                        
                        btn.lookupController().redirectTo('subpage')
                    }
                },
                    {xtype: 'button', text: 'LIST'},
                    {xtype: 'button', text: 'ITEM'},
                    {xtype: 'button', text: 'ITEM EDIT'}
                ]
            })


            
            this.getViewModel().set('routeHash', 'settings');
        },
    
        onBeforeNavigate(appHash, action) {
            appHash.resume();
        }
    
    },

    // viewModel: {
    //     formulas: {

    //         getParentRoute: {
    //             bind: '{route}',
    //             get(route) {
    //                 return {
    //                     route,
    //                     parent: (route || '').split('/').filter(r => r)[0]
    //                 };
    //             }
    //         }
    //     }
    // },
    //     data: {
    //         routes: {
    //             settings: {
    //                 subpage: 'subpage'
    //             }
    //         }
    //     }
    // },

    items: [
        {
            xtype: 'textfield',
            bind: '{subMenuState}'
        },
        {
            xtype: 'button',
            text: 'Home',
            handler: (btn) => btn.lookupController().redirectTo('./list')
        },
        {
            xtype: 'button',
            bind: {text: `{getParentRoute.route} ${Ext.getVersion().version}`},
            handler: (btn) => btn.lookupController().redirectTo('settings')
        },
        {
            xtype: 'togglefield',
            bind: {
                value: '{darkModeCalc}',
                label: '{darkModeLabel}',
            }
        },
        // {
        //     reference: 'aaContainer',
        //     layout: 'fit',
        //     data: {
        //         locale: 'aAAA',
        //         number: 44
        //     },
        //     tpl: [
        //         `<tpl for=".">
        //             <div class="info-icon">AAAAADDDDDD</div>
        //             <div class="info-text">
        //                 {[this.getCountText(values.locale, values.numbers)]}
        //             </div>
        //             <div class="close-icon"></div>
        //         </tpl>`,
        //         {
        //             getCountText(locale, numbers) {
        //                 var count = numbers.length;
        
        //                 if (count > 1) {
        //                     return Ext.String.format(locale.lastRequestsText, count);
        //                 }
        //                 else {
        //                     return Ext.String.format(locale.lastRequestText, numbers[0]);
        //                 }
        //             }
        //         }
        //     ]
        // },
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
