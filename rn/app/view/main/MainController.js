/**
 * 
 */
Ext.define('RN.view.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-main',

    bindings: {
        onChangeDarkMode: '{darkMode}'
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
        Fashion.css.setVariables(cssVariables[darkMode ? 'dark' : 'light']);
    }

});
