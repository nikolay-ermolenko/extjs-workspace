/**
 * 
 */
Ext.define('CN.controller.Settings', {

    extend: 'Ext.Mixin',

    getSettingsSuccess: Ext.emptyFn,
    getSettingsFailure: Ext.emptyFn,

    /**
     * 
     */
    getSettings() {
        return Ext.Ajax.request({
            url: '/api/system/settings',
            scope: this
        }).then(
            this.getSettingsSuccess.bind(this)
        ).catch(
            this.getSettingsFailure.bind(this)
        );
    }

});
