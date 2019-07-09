/**
 * 
 */
Ext.define('CN.controller.Route', {

    extend: 'Ext.Mixin',

    onBeforeNavigate: Ext.emptyFn,
    onNavigate: Ext.emptyFn,

    mixinConfig: {
        extended(baseClass, derivedClass, classBody) {

            classBody.routes = {
                ':path': {
                    action: 'onNavigate',
                    before: 'onBeforeNavigate',
                    conditions: {
                        ':path': '([%a-zA-Z0-9\\./]+)'
                    }
                }
            };

        }
    }

});
