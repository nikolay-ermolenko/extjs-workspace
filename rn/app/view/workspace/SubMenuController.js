/**
 * 
 */
Ext.define('RN.view.workspace.SubMenuController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-workspace-sub-menu',

    bindings: {
        onChangeSubMenuState: '{subMenuState}'
    },

    onChangeSubMenuState(subMenuState) {
        const subMenu = this.getView(),
            hideAnimation = subMenu && subMenu.getHideAnimation(),
            showAnimation = subMenu && subMenu.getShowAnimation();

        if (subMenuState) {
            hideAnimation && hideAnimation.stop();
            subMenu.show();
        }
        else {
            showAnimation && showAnimation.stop();
            subMenu.hide();
        }
    }

});
