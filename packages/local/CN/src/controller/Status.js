/**
 * 
 */
Ext.define('CN.controller.Status', {

    extend: 'Ext.Mixin',

    getStatusSuccess: Ext.emptyFn,
    getStatusFailure: Ext.emptyFn,

    /**
     * 
     */
    getStatus() {
        return Ext.Ajax.request({
            url: '/api/system/status',
            scope: this
        }).then(
            this.getStatusSuccess.bind(this)
        ).catch(
            this.getStatusFailure.bind(this)
        );
    }

});
