/**
 * 
 */
Ext.define('RN.Application', {

    extend: 'Ext.app.Application',

    name: 'RN',

    quickTips: false,

    platformConfig: {
        desktop: {
            quickTips: true
        }
    }

});
