/**
 * 
 */
Ext.define('RN.view.main.Main', {

    extend: 'Ext.panel.Panel',

    xtype: 'rn-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Center'
    ],

    controller: 'rn-main',
    viewModel: 'rn-main',

    layout: 'center',

    bind: {
        title: 'Main view DM {darkMode}'
    },

    items: {
        xtype: 'togglefield',
        bind: {
            value: '{darkMode}',
            label: '{darkModeLabel}',
        }
    }

});
