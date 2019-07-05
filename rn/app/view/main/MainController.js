/**
 * 
 */
Ext.define('RN.view.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-main',

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
