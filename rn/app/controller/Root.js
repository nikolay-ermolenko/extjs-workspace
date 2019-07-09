/**
 * 
 */
Ext.define('RN.controller.Root', {

    extend: 'CN.controller.Root',

    getSettingsFailure() {
        Ext.toast('Load Settings Error');
    },

    getSettingsSuccess({ responseText }) {
        this.setMainViewModel('systemSettings', Ext.JSON.decode(responseText, true));
        this.setMainViewModel('systemLoaded.settings', true);
    },

    getStatusSuccess({ responseText }) {
        this.setMainViewModel('systemStatus', Ext.JSON.decode(responseText, true));
        this.setMainViewModel('systemLoaded.status', true);
    },

    getStatusFailure(xhr) {
        this.setMainViewModel('systemStatus', {});
        this.setMainViewModel('systemLoaded.status', true);
    },

    loginFailed() {
        Ext.toast('Authorization error');
    },

    loginSuccess({ responseText }) {
        const result = Ext.JSON.decode(responseText, true);

        if (result.authenticated) {
            this.setMainViewModel('systemStatus', result);
        } else {
            this.loginFailed();
        }
    },

    logoutSuccess() {
        this.setMainViewModel('systemStatus', {});
    },
    logoutFailed() {
        this.setMainViewModel('systemStatus', {});
    },

    setMainViewModel(key, value) {
        try {
            const mainView = Ext.getApplication().getMainView(),
                vm = mainView.getViewModel();
            vm.set(key, value);
        } catch (e) {
            Ext.RC.logError('ERR-0001', e);
        }
    },

    removeLoadingMask() {
        try {
            Ext.get('loading-parent').destroy();
        } catch (e) { }
    },

    onNavigate(appHash) {
        this.setMainViewModel('route', appHash);
    }

});
