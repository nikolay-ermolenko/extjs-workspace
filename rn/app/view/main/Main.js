/**
 * 
 */
Ext.define('RN.view.main.Main', {

    extend: 'Ext.Container',

    xtype: 'rn-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Center'
    ],

    controller: 'rn-main',
    viewModel: 'rn-main',

    bind: {
        style: 'padding-left:{sideMenuCalcWidth}px'
    },

    layout: 'fit'

});
