/**
 * 
 */
Ext.define('CN.sim.api.system.Settings', {

    singleton: true,

    requires: [
        'Ext.ux.ajax.SimManager'
    ]

}, () => {

    Ext.ux.ajax.SimManager.register({
            '/api/system/settings': {
                type: 'json',
                data: () => ({
                    shortName: 'My app',
                    fullName: 'My garbage app',
                    locale: null
                })
            }
        });

});
