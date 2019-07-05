/**
 * 
 */
Ext.define('CN.sim.api.system.Logout', {

    singleton: true,

    requires: [
        'Ext.ux.ajax.SimManager'
    ]

}, () => {

    Ext.ux.ajax.SimManager.register({
        '/api/system/logout': {
            type: 'json',
            data() {
                delete localStorage['system-user-id'];
                return {
                    userId: null,
                    authenticated: false,
                    darkMode: null
                }
            }
        }
    });

});
