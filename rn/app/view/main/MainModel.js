/**
 * 
 */
Ext.define('RN.view.main.MainModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rn-main',

    data: {
        darkMode: false,
        darkModelLabelOff: 'Вызвать тьму',
        darkModelLabelOn: 'Да будет свет',

        sideMenuLabel: 'Ширина бокового меню',
        sideMenuWidth: 80,
        sideMenuMinWidth: 62,
        sideMenuMaxWidth: 160,
        sideMenuStepWidth: 4,

        subMenuState: false
    },

    formulas: {

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
