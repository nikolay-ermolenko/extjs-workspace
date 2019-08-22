/**
 * 
 */
Ext.define('RN.view.workspace.WorkspaceController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-workspace',

    control: {
        'mt-button': {
            // click: (button) => console.log(55, button),
            textchange: (btn, text) => console.log(99999)
        },
        'rn-workspace-side-bar': {
            initialize(cmp) {
                cmp.el.on('swipe', (e) => {
                    if (e.direction === 'right') {
                        this.getViewModel().set('subMenuState', true);
                    }
                });
            }
        },
        'rn-workspace-sub-menu': {
            initialize(cmp) {
                cmp.el.on('swipe', (e) => {
                    if (e.direction === 'left') {
                        this.getViewModel().set('subMenuState', false);
                    }
                });
            },
            beforehide() {
                this.getViewModel().set('subMenuState', false);
            }
        }
    },

    toggleMainMenu() {
        const vm = this.getViewModel(),
            subMenuState = vm.get('subMenuState');

        vm.set('subMenuState', !subMenuState);
    }

});

