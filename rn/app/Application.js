/**
 * 
 */
Ext.define('RN.Application', {

    extend: 'Ext.app.Application',

    name: 'RN',

    controllers: [
        'RN.controller.Root'
    ],

    quickTips: false,

    defaultToken: 'home',

    platformConfig: {
        desktop: {
            quickTips: true
        }
    }

});
