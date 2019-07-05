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

        responsiveConfig: {
            small: {
                top: 0,
                width: '100%',
                minWidth: null,
                maxWidth: null,
                shadow: false,
                padding: 40
            },
            large: {
                top: null,
                width: '60%',
                height: null,
                minWidth: 200,
                maxWidth: 340,
                shadow: true,
                padding: 20
            }
        },

        modelValidation: true,
        items: [
            {
                flex: 1,
                padding: '20 0',
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
                ui: 'action',
                buttonType: 'submit',
                bind: {
                    disabled: '{!isValid}'
                },
                handler: 'login'
            }
        ],
        buttonToolbar: {

            responsiveConfig: {
                wide: {
                    docked: 'right',
                },
                tall: {
                    docked: 'bottom',
                }
            },

            layout: {
                type: 'box',

                responsiveConfig: {
                    wide: {
                        vertical: true,
                        pack: 'start'
                    },
                    tall: {
                        vertical: false,
                        pack: 'center'
                    }
                }
            }
        }
    }
});
