/**
 * 
 */
Ext.define('RN.view.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.rn-main',

    bindings: {
        onChangeDarkMode: '{darkMode}'
    },

    control: {
        'rn-side-menu': {
            initialize(cmp) {
                cmp.el.on('swipe', (e) => {
                    if (e.direction === 'right') {
                        this.getViewModel().set('subMenuState', true);
                    }
                });
            }
        },
        'rn-sub-menu': {
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

    onChangeDarkMode(darkMode) {
        const cssVariables = {
            light: {
                'dark-mode': 'false',
                'base-color': '#36C'
            },
            dark: {
                'dark-mode': 'true',
                'base-color': '#678'
            }
        }
        Fashion.css.setVariables(cssVariables[darkMode ? 'dark' : 'light']);
    },

    toggleMainMenu() {
        const vm = this.getViewModel(),
            subMenuState = vm.get('subMenuState');

        vm.set('subMenuState', !subMenuState);
    }

});
