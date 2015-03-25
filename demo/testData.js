var data = [{
    label: 'Простые блоки',
    items: [{
        name: 'Hello World!',
        image: "qwe.jpg"
    }, {
        name: 'Блок 2'
    }, {
        name: 'makeup'
    }, {
        name: 'miniCard',
        styles: {
            markup: 'background: white;'
        },
        types: [{
            label: 'context',
            items: [{
                name:"full"
            }, {
                name:"adv"
            }, {
                name:"recoveryStart",
                cls: "ads _recovery"
            }, {
                name:"recoveryEnd",
                cls: "ads _recovery"
            }, {
                name:"booklet",
                cls: '_photo'
            }, {
                name:"discount"
            }, {
                name:"eshop"
            }, {
                name:"plusOne"
            }, {
                name:"taxi",
                cls: '_photo'
            }, {
                name:"truba"
            }, {
                name:"place"
            }, {
                name:"stop",
                cls: '_type_station'
            }, {
                name:"route",
                cls: '_type_route _transportType_bus'
            }, {
                name:"filials",
                cls: '_photo'
            }, {
                name:"advWarning",
                cls: '_ads _advWarning'
            }]
        }]
    }]
}];

var makeupCtx = {

    modifiers: {
        hiddenModule: 'makeup__module--hidden',
        hiddenModuleType: 'makeup__subnav-link--hidden',
        baron: 'makeup__aside--baron'
    },

    menu: {
        tooltip: 'Toggle menu',
        checked: true
    },

    search: {
        placeholder: ''
    },

    mode: {
        label: 'Mode',

        items: [
            {
                tooltip: 'Image',
                value: '1'
            },
            {
                tooltip: 'Markup',
                value: '2',
                checked: true
            },
            {
                tooltip: 'Markup and image',
                value: '3',
            },
            {
                tooltip: 'Markup and inversed image',
                value: '4',
            }
        ]
    },

    background: {
        label: 'Background',

        items: [
            {
                tooltip: 'Gray',
                value: 'color',
                checked: true
            },
            {
                tooltip: 'Transparency grid',
                value: 'transparency'
            }
        ]
    },

    transparency: {
        label: 'Transparency',

        slider: {
            min: 0,
            max: 1,
            value: 1
        }
    },

    zoom: {
        label: 'Zoom',

        slider: {
            min: 1,
            max: 4,
            value: 1
        }
    },

    ruler: {
        h: {
            type: 'ruler',
            name: 'makeup-ruler-h',

            slider: {
                min: 0,
                max: 2000,
                value: 400
            }
        },
        v: {
            type: 'ruler',
            name: 'makeup-ruler-v',

            slider: {
                min: 0,
                max: 1000,
                step: 10
            }
        }
    },

    smiley: {
        tooltip: 'Smiley styles on markup container',
        checked: false
    }
};
