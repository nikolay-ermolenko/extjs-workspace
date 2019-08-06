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
                                    btn.up().up().down('list').getStore().add({id:Math.random(),name:'dfgdgdfgfg - ' + Math.random()})
                                }
                            },
                            {
                                xtype: 'mt-button',
                                text: 'ADD',
                                listeners: {
                                    click: (btn) => btn.up().up().down('list').getStore().add({id:Math.random(),name:'dfgdgdfgfg - ' + Math.random()})
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
                            for (let i = 0, l = 77; i < 77; i++) {
                                res.push({
                                    id: i + 1,
                                    name: 'List Item # ' + (i + 1)
                                })
                            }
                            return res;
                        })()
                    },
                    {
                        width: 12,
                        listeners: {
                            resize() {
                                console.log(66, arguments);
                                

                            }
                        },
                        items: {
                            width: 12,
                            height: 40,
                            minHeight: 40,
                            style: {
                                width: 10,
                                height: 40,
                                background: 'rgb(40, 130, 205)',
                                borderRadius: '0px'
                            },
                            listeners: {
                                desroy() {
                                    console.log('desroy');
                                    
                                },
                                painted(track) {
                                    const list = track.up().up().down('list'),
                                        scroller = list.getScrollable(),
                                        trackHeight = track.up().innerElement.getHeight(),
                                        barHeight = track.getHeight();


                                        track.el.setStyle('top', `0px`)
                                        // console.log(9999,scroller.position.y);
                                        if(track.customScrolled) {
                                            return;
                                        }
                                        track.customScrolled = true;
                                        scroller.on({
                                            scroll() {
                                                track.el.setStyle('top', `${(trackHeight - barHeight) * (scroller.position.y/ scroller.getMaxUserPosition().y)}px`)
                                            // console.log(444, scroller.position.y/ scroller.getMaxUserPosition().y);

                                        }
                                    });
                      
                                    // track.el.setStyle('top', `${(trackHeight - barHeight) * (scroller.position.y/ scroller.getMaxUserPosition().y)}px`)
                                    // console.log(9999,scroller.position.y, barHeight, trackHeight, scroller.getMaxUserPosition().y);

                                    new Ext.drag.Source({
                                        element: track.el,
                                        constrain: {
                                            element: true,
                                            vertical: true
                                        },
                                        listeners: {
                                            dragend: {
                                                // buffer: 40,
                                                fn(bar, info) {
                                                console.log('dragend');
                                                
                                                    const list = track.up().up().down('list'),
                                                        scroller = list.getScrollable(),
                                                        trackHeight = track.up().innerElement.getHeight(),
                                                        barHeight = track.innerElement.getHeight(),
                                                        posY = parseInt(bar.getElement().getStyleValue('top')),
                                                        ratio = posY / (trackHeight - barHeight);

                                                    scroller.doScrollTo(0, scroller.getMaxUserPosition().y * ratio);



                                                    // console.log(22, scroller.getMaxUserPosition(), ratio, barHeight, trackHeight, parseInt(bar.getElement().getStyleValue('top')));
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
});
