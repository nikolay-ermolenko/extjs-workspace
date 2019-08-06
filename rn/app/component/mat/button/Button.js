Ext.define('RN.component.mat.button.Button', {

    extend: 'Ext.Component',

    xtype: 'mt-button',

    config: {
        text: {
            $value: null,
            evented: true
        }
    },

    defaultBindProperty: 'text',

    element: {
        tag: 'button',
        reference: 'element',
        cls: 'mat-button',
        listeners: {
            click: 'onClick'
        }
    },

    getTemplate: function () {
        return [{
            reference: 'textElement',
            cls: 'md-button-content'
        }];
    },

    updateText: function (text, oldText) {
        this.textElement.setHtml(text);
    },

    onClick: function () {
        this.fireEvent('click', this);
    }

});
