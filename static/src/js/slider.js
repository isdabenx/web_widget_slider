odoo.define('web_widget_slider', (require) => {
    "use strict";

    const Widget = require('web.basic_fields').FieldFloat;
    const registry = require('web.field_registry')

    const FieldSlider = Widget.extend({
        template: 'web_widget_slider',
        events: {
            'change .js_change_slider': 'changeSlider',
        },
        supportedFieldTypes: ["float", "integer"],
        init() {
            this._super(...arguments);
            this.options = {
                step: Number(this.nodeOptions.step) || 1,
                min: Number(this.nodeOptions.min) || 0,
                max: Number(this.nodeOptions.max) || 10,
                sufix: this.nodeOptions.sufix || '',
                preffix: this.nodeOptions.preffix || '',
                separator: this.nodeOptions.separator || '',
            };
        },
        _renderEdit() {
            this.el.getElementsByTagName('input')[0].removeAttribute('disabled');
        },
        _renderReadonly() {
            this.el.getElementsByTagName('input')[0].setAttribute('disabled', '');
        },
        renderElement() {
            this._super(...arguments);
        },
        async changeSlider(ev) {
            await this._setValue(ev.target.value);
            this.renderElement();
        },
        // isSet() {
        //     return true;
        // }
    });
    registry.add('slider', FieldSlider);
});