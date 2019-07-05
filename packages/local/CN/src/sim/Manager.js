/**
 * 
 */
Ext.define('CN.sim.Manager', {

    requires: [
        'Ext.ux.ajax.JsonSimlet',
        'Ext.ux.ajax.SimManager',
        'CN.sim.api.*'
    ],

    constructor() {

        Ext.ux.ajax.SimManager.init({
            defaultSimlet: null,
            delay: 400,
            ready: false
        });

    }
});
