/**
 * 
 */
Ext.define('RN.view.login.LoginController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-login',

    control: {
        'textfield[name="login"]': {
            painted: (field) => field.focus()
        }
    },

    login() {
        Ext.RC.login(
            this.getViewModel().get('auth').getData()
        );
    }
});
