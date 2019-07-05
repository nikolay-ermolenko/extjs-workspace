/**
 * 
 */
Ext.define('RN.view.workspace.SubMenu', {

    extend: 'Ext.Container',

    xtype: 'rn-workspace-sub-menu',

    reference: 'workspace-sub-menu',

    controller: {

        bindings: {
            onChangeA: '{subMenuState}'
        },

        onChangeA(subMenuState) {
            const subMenu = this.getView();
            if (subMenuState) {
                subMenu.getHideAnimation().stop();
                subMenu.show();
            }
            else {
                subMenu.getShowAnimation().stop();
                subMenu.hide();
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
            xtype: 'rn-workspace-settings'
        }
    }
});
