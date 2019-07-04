/**
 * 
 */
Ext.define('RN.view.main.SubMenu', {

    extend: 'Ext.Container',

    xtype: 'rn-sub-menu',

    reference: 'workspace-sub-menu',

    controller: {

        bindings: {
            onChangeA: '{subMenuState}'
        },

        onChangeA(subMenuState) {
            if (subMenuState) {
                this.getView().getHideAnimation().stop();
                this.getView().show();
            }
            else {
                this.getView().getShowAnimation().stop();
                this.getView().hide();
            }
        }
    },

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

    layout: 'fit',

    items: {
        xtype: 'panel',
        title: 'Меню',
        iconCls: `${Ext.baseCSSPrefix}fa fa-wrench`,
        items: {
            xtype: 'rn-settings'
        }
    }
});
