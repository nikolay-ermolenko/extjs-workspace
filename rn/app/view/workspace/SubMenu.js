/**
 * 
 */
Ext.define('RN.view.workspace.SubMenu', {

    extend: 'Ext.Container',

    xtype: 'rn-workspace-sub-menu',

    reference: 'workspace-sub-menu',

    requires: [
        'RN.view.workspace.SubMenuController'
    ],

    controller: 'rn-workspace-sub-menu',

    layout: 'fit',
    width: '80%',
    minWidth: 300,
    maxWidth: 500,
    height: '100%',
    floated: true,
    modal: true,
    hideOnMaskTap: true,
    showAnimation: {
        type: 'slideIn',
        duration: 100,
        direction: 'right'
    },
    hideAnimation: {
        type: 'slideOut',
        duration: 160,
        direction: 'left'
    },

    layout: 'vbox',

    items: {
        xtype: 'panel',
        title: 'Меню',
        flex: 1,
        layout: 'vbox',
        iconCls: `${Ext.baseCSSPrefix}fa fa-wrench`,
        items: [
            {
                xtype: 'rn-workspace-settings'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                text: 'ADD',
                                handler(btn) {
                                    btn.up().up().down('list').getStore().add({ id: Math.random(), name: 'dfgdgdfgfg - ' + Math.random() })
                                }
                            },
                            {
                                text: 'DEL',
                                handler(btn) {
                                    btn.up().up().down('list').getStore().removeAt(0)
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        reference: 'scrolledList',
                        flex: 1,
                        itemTpl: '{name}',
                        data: (function () {
                            const res = [];
                            for (let i = 0, l = 15; i < l; i++) {
                                res.push({
                                    id: i + 1,
                                    name: 'List Item # ' + (i + 1)
                                })
                            }
                            return res;
                        })()
                    },
                    {
                        xtype: 'cmp-scroll-track'
                    }
                ]
            }
        ]
    }
});
