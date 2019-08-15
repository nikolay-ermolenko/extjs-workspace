Ext.define('CN.overrides.Container', {

    override: 'Ext.Container',


    template: [{
        reference: 'bodyElement',
        cls: Ext.baseCSSPrefix + 'body-el',
        uiCls: 'body-el'
    },{
        reference: 'vScrollTrackElement',
        style: {
            height: 'calc(100% - 6px)',
            width: '6px',
            position: 'absolute',
            right: 0,
            background: 'rgba(255,255,255,.2)'
        },
        children: [{
            reference: 'vScrollBarElement',
            style: {
                width: '6px',
                height: '40px',
                background: 'rgba(40,40,40,.5)',
                borderRadius: '0px',
                position: 'absolute',
                top: 0,
                right: 0
            }
        }]
    },{
        reference: 'hScrollTrackElement',
        style: {
            height: '6px',
            width: 'calc(100% - 6px)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            background: 'rgba(255,255,255,.2)'
        },
        children: [{
            reference: 'hScrollBarElement',
            style: {
                width: '40px',
                height: '6px',
                background: 'rgba(40,40,40,.5)',
                borderRadius: '0px',
                position: 'absolute',
                top: 0,
                left: 0
            }
        }]
    }],
    template2: [{
        cls: 'x-container x-container-body-el x-layout-box x-align-stretch x-horizontal aaaaaaaaaaaaaaaaaaaaaaaaa',
        children: [
            {
                reference: 'bodyElement',
                cls: Ext.baseCSSPrefix + 'body-el',
                uiCls: 'body-el'
            },
            {
                reference: 'vScrollTrackElement',
                style: {
                    height: 'calc(100% - 8px)',
                    width: '4px',
                    position: 'absolute',
                    right: 0,
                    background: 'rgba(255,255,255,.2)'
                },
                children: [{
                    reference: 'vScrollBarElement',
                    style: {
                        width: '4px',
                        height: '40px',
                        background: 'rgba(40,40,40,.5)',
                        borderRadius: '0px',
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }
                }]
            },
            {
                reference: 'hScrollTrackElement',
                style: {
                    height: '8px',
                    width: 'calc(100% - 8px)',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    background: 'rgba(255,255,255,.2)'
                },
                children: [{
                    reference: 'hScrollBarElement',
                    style: {
                        width: '40px',
                        height: '8px',
                        background: 'rgba(40,40,40,.5)',
                        borderRadius: '0px',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }
                }]
            }
        ]
    }],

    initialize: function () {

        this.callParent(arguments);

        var scroller = this.getScrollable();

        if (!this.vScrollBarElement || !this.hScrollBarElement) {
            return;
        }

        if(!scroller || !scroller.getX()){
            this.hScrollTrackElement.setDisplayed('none');
        }
        if(!scroller || !scroller.getY()){
            this.vScrollTrackElement.setDisplayed('none');
        }

        if (scroller && Ext.isFunction(scroller.on)) {
            scroller.on({
                scope: this,
                scroll() {
                    var vTrackHeight = this.vScrollTrackElement.getHeight(),
                        vBarHeight = this.vScrollBarElement.getHeight(),
                        hTrackWidth = this.hScrollTrackElement.getWidth(),
                        hBarWidth = this.hScrollBarElement.getWidth();
                    this.vScrollBarElement.setTop((vTrackHeight - vBarHeight) * (scroller.position.y / scroller.getMaxUserPosition().y));
                    this.hScrollBarElement.setLeft((hTrackWidth - hBarWidth) * (scroller.position.x / scroller.getMaxUserPosition().x));
                }
            });
        }

        this.vScrollBarElement && new Ext.drag.Source({
            element: this.vScrollBarElement,
            constrain: {
                element: true,
                vertical: true
            },
            listeners: {
                dragmove: {
                    scope: this,
                    fn() {
                        var scroller = this.getScrollable(),
                            trackHeight = this.vScrollTrackElement.getHeight(),
                            barHeight = this.vScrollBarElement.getHeight(),
                            posY = parseInt(this.vScrollBarElement.getStyleValue('top')),
                            ratio = posY / (trackHeight - barHeight);

                        scroller.doScrollTo(scroller.getPosition().x, scroller.getMaxUserPosition().y * ratio);
                    }
                }
            }
        });
        this.hScrollBarElement && new Ext.drag.Source({
            element: this.hScrollBarElement,
            constrain: {
                element: true,
                horizontal: true
            },
            listeners: {
                dragmove: {
                    scope: this,
                    fn() {
                        var scroller = this.getScrollable(),
                            trackWidth = this.hScrollTrackElement.getWidth(),
                            barWidth = this.hScrollBarElement.getWidth(),
                            posX = parseInt(this.hScrollBarElement.getStyleValue('left')),
                            ratio = posX / (trackWidth - barWidth);

                        scroller.doScrollTo(scroller.getMaxUserPosition().x * ratio, scroller.getPosition().y);
                    }
                }
            }
        });
    }

});
