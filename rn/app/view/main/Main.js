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
        tall: 'width < 500 || height >= 500',
        wide: '!(width < 500 || height >= 500)',
        small: 'width < 500 || height < 500',
        large: '!(width < 500 || height < 500)'
    },

    controller: 'rn-main',
    viewModel: 'rn-main',

    layout: 'fit'

});
