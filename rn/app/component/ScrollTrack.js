/**
 * 
 */
Ext.define('RN.component.ScrollTrack', {

    extend: 'Ext.Container',

    xtype: 'cmp-scroll-track',

    cls: 'scroll-track',

    width: 12,

    items: {
        cls: 'scroll-bar',
        width: 12,
        height: 40,
        minHeight: 40,
        style: {
            width: 10,
            height: 40
        },
        listeners: {
            painted(scrollBar) {
                const list = scrollBar.up().up().down('list'),
                    scroller = list.getScrollable(),
                    track = scrollBar.up('cmp-scroll-track'),
                    trackHeight = track.innerElement.getHeight();

                scrollBar.el.setStyle('top', '0px');

                if (scrollBar.customScrolled) {
                    return;
                }

                scrollBar.customScrolled = true;

                scroller.on({
                    scroll() {
                        scrollBar.el.setStyle('top', `${(trackHeight - scrollBar.getHeight()) * (scroller.position.y / scroller.getMaxUserPosition().y)}px`);
                    }
                });

                list.innerElement.down('.x-list-inner-ct').on({
                    resize(el, info) {
                        if (info.contentHeight <= trackHeight) {
                            track.setWidth(0);
                        } else {
                            const newScrollBarHeight = trackHeight * (list.el.getHeight() / info.contentHeight);
                            track.setWidth(12);
                            scrollBar.setHeight(newScrollBarHeight);

                            if (newScrollBarHeight + parseInt(scrollBar.el.getStyleValue('top')) > trackHeight) {
                                scrollBar.el.setStyle('top', `${trackHeight - newScrollBarHeight}px`);
                            }
                        }
                    }
                })

                new Ext.drag.Source({
                    element: scrollBar.el,
                    constrain: {
                        element: true,
                        vertical: true
                    },
                    listeners: {
                        dragend: {
                            // buffer: 40,
                            fn(bar, info) {
                                const list = scrollBar.up().up().down('list'),
                                    scroller = list.getScrollable(),
                                    trackHeight = scrollBar.up().innerElement.getHeight(),
                                    barHeight = scrollBar.innerElement.getHeight(),
                                    posY = parseInt(bar.getElement().getStyleValue('top')),
                                    ratio = posY / (trackHeight - barHeight);
                                // console.log('A', barHeight);
                                scroller.doScrollTo(0, scroller.getMaxUserPosition().y * ratio);
                            }
                        }
                    }
                });

            }
        }
    }
});

