/**
 * 
 */
Ext.define('CN.controller.Auth', {

    extend: 'Ext.Mixin',

    loginSuccess: Ext.emptyFn,
    loginFailed: Ext.emptyFn,
    logoutSuccess: Ext.emptyFn,
    logoutFailed: Ext.emptyFn,

    login({ login, password }) {
        return Ext.Ajax.request({
            url: '/api/system/login',
            params: {
                login,
                password
            },
            scope: this
        }).then(
            this.loginSuccess.bind(this)
        ).catch(
            this.loginFailed.bind(this)
        );
    },

    logout() {
        Ext.Ajax.request({
            url: '/api/system/logout',
            scope: this
        }).then(
            this.logoutSuccess.bind(this)
        ).catch(
            this.logoutFailed.bind(this)
        );
    }

});
