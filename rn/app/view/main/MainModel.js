/**
 * 
 */
Ext.define('RN.view.main.MainModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rn-main',

    data: {
        darkMode: false,
        darkModelLabelOff: 'Вызвать тьму',
        darkModelLabelOn: 'Да будет свет'
    },

    formulas: {

        darkModeLabel: {
            bind: '{darkMode}',
            get(darkMode) {
                return darkMode
                    ? this.get('darkModelLabelOn')
                    : this.get('darkModelLabelOff');
            }
        }

    }

});
