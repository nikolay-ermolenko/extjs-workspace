/**
 * 
 */
Ext.define('RN.view.workspace.Settings', {

    extend: 'Ext.form.Panel',

    xtype: 'rn-workspace-settings',


    controller: {

        bindings: {
            onRouteChange: '{route}'
        },

        onRouteChange(route) {
            if (/settings\/list(\/*)(.*)/.test(route) && !this.lookupReference('aaContainer')) {
                this.getView().add({
                    reference: 'aaContainer',
                    xtype: 'tabpanel',
                    listeners: {
                        activeItemchange(a, v) {
                            if(v.itemId === 'list') {

                            } else {

                            }


                        }
                    },
                    items: [
                        {
                            title: 'AAA',
                            itemId: 'list'
                        },
                        {
                            title: 'BBB',
                            itemId: 'card'
                        },
                        {
                            title: 'CCC',
                            itemId: 'edit'
                        }
                    ]
                });




            } else {
                try {
                    this.lookupReference('aaContainer').destroy();
                } catch (e) {

                }
            }
        }

    },

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
            bind: { text: `{getParentRoute.route} ${Ext.getVersion().version}` },
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
