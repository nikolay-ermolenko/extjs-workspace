/**
 * 
 */
Ext.define('RN.view.login.Login', {

    extend: 'Ext.Container',

    xtype: 'rn-login',

    requires: [
        'RN.view.login.LoginModel'
    ],

    controller: 'rn-login',
    viewModel: 'rn-login',

    layout: 'center',

    items: {
        xtype: 'formpanel',
        bind: {
            title: '{systemSettings.shortName:htmlEncode}'
        },
        width: '60%',
        minWidth: 200,
        maxWidth: 340,
        shadow: true,
        modelValidation: true,
        items: [
            {
                flex: 1,
                bind: '{systemSettings.fullName:htmlEncode}'
            },
            {
                label: 'Login',
                name: 'login',
                xtype: 'textfield',
                bind: '{auth.login}'
            },
            {
                label: 'Password',
                name: 'password',
                xtype: 'passwordfield',
                bind: '{auth.password}'
            }
        ],
        buttons: [
            {
                text: 'Enter',
                buttonType: 'submit',
                bind: {
                    disabled: '{!isValid}'
                },
                handler: 'login'
            }
        ]
    }
});
