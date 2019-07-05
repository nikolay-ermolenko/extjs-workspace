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

    mixins: [
        'Ext.mixin.Responsive'
    ],

    responsiveFormulas: {
        small: 'width < 500',
        large: 'width >= 500'
    },

    controller: 'rn-main',
    viewModel: 'rn-main',

    layout: 'fit'

});
