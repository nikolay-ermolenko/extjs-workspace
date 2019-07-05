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

    platformConfig: {
        desktop: {
            quickTips: true
        }
    }

});
