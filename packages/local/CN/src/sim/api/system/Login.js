/**
 * 
 */
Ext.define('CN.sim.api.system.Login', {

    singleton: true,

    requires: [
        'Ext.ux.ajax.SimManager'
    ]

}, () => {

    Ext.ux.ajax.SimManager.register({
        '/api/system/login': {
            type: 'json',
            data({ xhr }) {
                const params = xhr.options && xhr.options.params || {};
                if (params.login === 'admin') {
                    localStorage.setItem('system-user-id', '0000-000-001');
                    return {
                        userId: '0000-000-001',
                        authenticated: true,
                        darkMode: localStorage.getItem('system-dark-mode') === 'dark'
                    }
                }
                if (params.login === 'user') {
                    localStorage.setItem('system-user-id', '0000-000-002');
                    return {
                        userId: '0000-000-002',
                        authenticated: true,
                        darkMode: localStorage.getItem('system-dark-mode') === 'dark'
                    }
                }
                if (params.login === 'dark') {
                    localStorage.setItem('system-user-id', '0000-000-003');
                    return {
                        userId: '0000-000-003',
                        authenticated: true,
                        darkMode: true
                    }
                }
                if (params.login === 'light') {
                    localStorage.setItem('system-user-id', '0000-000-004');
                    return {
                        userId: '0000-000-004',
                        authenticated: true,
                        darkMode: false
                    }
                }
                return {
                    userId: null,
                    authenticated: false,
                    darkMode: null
                }
            }
        }
    });

});
