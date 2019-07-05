/**
 * 
 */
Ext.define('RN.view.login.LoginModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rn-login',

    reuires: [
        'RN.model.Login'
    ],

    links: {
        auth: {
            reference: 'RN.model.Login',
            create: true
        }
    },
    formulas: {
        isValid: {
            bind: {
                bindTo: '{auth}',
                deep: true
            },   
            get(auth) {
                return auth.isValid();
            }
        }
    }
});
