/**
 * 
 */
Ext.define('RN.model.Login', {

    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Length'
    ],

    fields: [
        {
            name: 'login',
            type: 'string'
        },
        {
            name: 'password',
            type: 'string'
        }
    ],

    validators: {
        login: [
            {
                type: 'length',
                min: 3,
                minOnlyMessage: 'Не менее 3-х символов'
            },
            {
                type: 'length',
                max: 16,
                maxOnlyMessage: 'Не более 16-и символов'
            },
            {
                type: 'presence',
                message: 'Обязательное поле'
            }
        ],
        password: [
            {
                type: 'length',
                min: 3,
                minOnlyMessage: 'Не менее 3-х символов'
            },
            {
                type: 'length',
                max: 16,
                maxOnlyMessage: 'Не более 16-и символов'
            },
            {
                type: 'presence',
                message: 'Обязательное поле'
            }
        ]
    }

});
