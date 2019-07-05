/**
 * 
 */
Ext.application({

    extend: 'RN.Application',

    name: 'RN',

    requires: [
        'Ext.Responsive',
        'Ext.Toast',
        'RN.*'
    ],

    mainView: 'RN.view.main.Main'
});
