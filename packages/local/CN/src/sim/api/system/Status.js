/**
 * 
 */
Ext.define('CN.sim.api.system.Status', {

    singleton: true,

    requires: [
        'Ext.ux.ajax.SimManager'
    ]

}, () => {

    Ext.ux.ajax.SimManager.register({
        '/api/system/status': {
            type: 'json',
            status: localStorage.getItem('system-user-id') ? 200 : 401,
            data: () => {
                const userId = localStorage.getItem('system-user-id') || null;
                return {
                    userId,
                    authenticated: !!userId,
                    darkMode: userId ? localStorage.getItem('system-dark-mode') === 'dark' : null
                };
            }
        }
    });

});
