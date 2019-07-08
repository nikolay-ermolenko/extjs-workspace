/**
 * 
 */
Ext.define('RN.view.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-main',

    routes: {
        ':section': {
            action: 'onNavigate',
            // before: 'onBeforeNavigate',
            conditions: {
                ':section': '([%a-zA-Z0-9\\./]+)'
            }
        }
    },



    onNavigate(appHash) {
        console.log(11, appHash);
        
        this.getViewModel().set('route', appHash)
        // console.log(555, this.getViewModel().get('routes.' + appHash));
        
        // debugger
    },

    // onBeforeNavigate(appHash, action) {
    //     console.log(2222, appHash);
    //     action.resume();
    // },
    // onNavigate(appHash) {
    //     console.log(333, appHash);

    //     this.getViewModel().set('route', appHash);
    // },


    bindings: {
        onChangeSystemLoaded: {
            bindTo: '{systemLoaded}',
            deep: true
        },
        onChangeDarkMode: '{darkModeCalc}',
        onChangeSystemAuthenticated: '{systemAuthenticated}'

    },

    onChangeSystemLoaded({ settings, status }) {
        if (settings && status) {
            Ext.RC.removeLoadingMask();
            Ext.Viewport.setVisibility(true);
        }
    },

    onChangeSystemAuthenticated(authenticated) {
        const view = this.getView();
        view.removeAll(true);

        if (authenticated) {
            view.add({ xtype: 'rn-workspace' });
        } else {
            view.add({ xtype: 'rn-login' });
        }

    },

    onChangeDarkMode(darkMode) {
        const cssVariables = {
            light: {
                'dark-mode': 'false',
                'base-color': '#36C'
            },
            dark: {
                'dark-mode': 'true',
                'base-color': '#678'
            }
        }
        localStorage.setItem('system-dark-mode', darkMode ? 'dark' : 'light');
        Fashion.css.setVariables(cssVariables[darkMode ? 'dark' : 'light']);
    }

});
