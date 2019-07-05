/**
 * 
 */
Ext.define('RN.view.workspace.WorkspaceModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rn-workspace',

    data: {
        darkModelLabelOff: 'Вызвать тьму',
        darkModelLabelOn: 'Да будет свет',

        sideMenuLabel: 'Ширина бокового меню',
        sideMenuWidth: 70,
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
