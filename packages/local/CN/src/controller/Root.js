/**
 * 
 */
Ext.define('CN.controller.Root', {

    extend: 'Ext.app.Controller',

    mixins: [
        'CN.controller.Settings',
        'CN.controller.Status',
        'CN.controller.Log',
        'CN.controller.Auth',
        'CN.controller.Route'
    ],

    onLaunch() {
        Ext.RC = this;
        Ext.Viewport.setVisibility(false);

        this.initAjaxSim();
        this.getSettings();
        this.getStatus();
    },

    initAjaxSim() {
        Ext.create('CN.sim.Manager');
    }

});
