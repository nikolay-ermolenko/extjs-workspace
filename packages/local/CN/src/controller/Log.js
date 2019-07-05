/**
 * 
 */
Ext.define('CN.controller.Log', {

    extend: 'Ext.Mixin',

    logError(code, e) {
        this.clearErrorLog();
        localStorage.setItem('ERR-' + (new Date().toISOString()), code);
        console.error(code, e);
    },

    clearErrorLog(all) {
        for (key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            // Test error record key ERR-2019-07-05T10:23:49.932Z
            if (/^ERR-\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(key)) {
                const dateIso = key.split('ERR-')[1];
                // Remove error rec older than 4 days
                if (all || dateIso && ((new Date() - new Date(dateIso)) > 1000 * 60 * 60 * 24 * 4)) {
                    delete localStorage[key]
                }
            }
        }
    },

    getErrorLog() {
        const result = {};
        for (key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            // Test error record key ERR-2019-07-05T10:23:49.932Z
            if (/^ERR-\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(key)) {
                result[key] = localStorage[key];
            }
        }
        return result;
    }

});
