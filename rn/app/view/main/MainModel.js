/**
 * 
 */
Ext.define('RN.view.main.MainModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rn-main',

    data: {
        systemSettings: {},
        systemStatus: {
            darkMode: null
        },
        systemLoaded: {},

        extJSVersion: Ext.getVersion(),

        sideMenuLabel: 'Ширина бокового меню',
        sideMenuWidth: 70,
        sideMenuMinWidth: 62,
        sideMenuMaxWidth: 160,
        sideMenuStepWidth: 4,

        subMenuState: false,

        route: null,
    },

    formulas: {

        getParentRoute: {
            bind: '{route}',
            get(route) {
                return {
                    route,
                    parent: (route || '').split('|').filter(r => r)[0]
                };
            }
        },

        systemAuthenticated: {
            bind: {
                deep: true,
                bindTo: '{systemStatus}'
            },
            get(systemStatus) {
                return systemStatus && systemStatus.authenticated || false;
            }
        },

        darkModeCalc: {
            bind: '{systemStatus.darkMode}',
            get(darkMode) {
                
                if(darkMode === null) {
                    return localStorage.getItem('system-dark-mode') === 'dark'
                }
                return darkMode;
            },
            set(value) {
                this.set('systemStatus.darkMode', value);
            }
        },

        darkModeLabel: {
            bind: '{darkMode}',
            get(darkMode) {
                return darkMode
                    ? this.get('darkModelLabelOn')
                    : this.get('darkModelLabelOff');
            }
        },

        sideMenuCalcWidth: {
            bind: '{sideMenuWidth}',
            get(sideMenuWidth) {
                const value = Number(sideMenuWidth),
                    minValue = this.get('sideMenuMinWidth'),
                    maxValue = this.get('sideMenuMaxWidth');

                if (value === 0) {
                    return 0;
                }

                return Ext.Array.min([
                    maxValue,
                    Ext.Array.max([
                        minValue,
                        value
                    ])
                ]);
            }
        }

    }

});
