/**
  * vue-typed-ui 1.6.6
  * UI components made with Semantic UI, VueTyped and friends
  * https://github.com/vue-typed/vue-typed-ui
  
  * Copyright 2016, Budi Adiono <budiadiono@gmail.com>
  * Released under the MIT license.
  '*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('toastr'), require('lodash'), require('vue-typed'), require('moment'), require('sweetalert2')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'toastr', 'lodash', 'vue-typed', 'moment', 'sweetalert2'], factory) :
  (factory((global.VueTypedUI = global.VueTypedUI || {}),global.Vue,global.toastr,global._,global.vueTyped,global.moment,global.swal));
}(this, (function (exports,Vue,toastr,_,vueTyped,moment,swal) { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
moment = 'default' in moment ? moment['default'] : moment;
swal = 'default' in swal ? swal['default'] : swal;

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var DefaultSettings = {
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'HH:mm',
    numeric: {
        decimalPlaces: 2,
        decimalSeparator: '.',
        groupSeparator: ',',
        max: 9999999999999.99,
        min: -9999999999999.99,
        sign: 'USD',
        signPos: 'right'
    }
};
var DefaultOptions = {
    prefix: 'ui',
    settings: DefaultSettings
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _FormBase = function (_Virtual) {
    inherits(_FormBase, _Virtual);

    function _FormBase() {
        classCallCheck(this, _FormBase);
        return possibleConstructorReturn(this, (_FormBase.__proto__ || Object.getPrototypeOf(_FormBase)).apply(this, arguments));
    }

    return _FormBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop()], _FormBase.prototype, "validator", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _FormBase.prototype, "validateInline", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _FormBase.prototype, "labelWidth", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _FormBase.prototype, "keyboardShortcuts", void 0);

var Form = function (_FormBase2) {
    inherits(Form, _FormBase2);

    function Form() {
        classCallCheck(this, Form);
        return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    createClass(Form, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var self = this;
            var opt = {
                onSuccess: function onSuccess() {
                    self.$emit('success');
                },
                onFailure: function onFailure(formErrors, fields) {
                    self.$emit('error', formErrors, fields);
                },
                // using default form keyboard shortcuts instead 
                keyboardShortcuts: false // this.keyboardShortcuts
            };
            if (this.validator) {
                Object.assign(opt, {
                    fields: this.validator,
                    inline: this.validateInline
                });
            }
            // domProps.onsubmit is flaky, let's do with jQuery instead
            $(this.$el).submit(function (e) {
                e.preventDefault();
            });
            $(this.$el).form(opt);
            if (this.labelWidth) {
                $(this.$el).find('.field.inline > label, .fields.inline > label').width(this.labelWidth);
            }
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).form('destroy');
        }
    }, {
        key: 'render',
        value: function render(ch) {
            var tag = this.keyboardShortcuts ? 'form' : 'div';
            return ch(tag, {
                class: 'ui form',
                domProps: {
                    onsubmit: function onsubmit(e) {
                        e.preventDefault();
                        return false;
                    }
                }
            }, [this.$slots['default']]);
        }
    }]);
    return Form;
}(_FormBase);
Form = __decorate([vueTyped.Options()], Form);

var DataValidateAttr = 'data-validate';
var ValidatorPropName = 'vtui_fc_validator';
var ValidatorPropNameTmp = '$$vtui_fc_validator';

var Util = function () {
    function Util() {
        classCallCheck(this, Util);
    }

    createClass(Util, null, [{
        key: 'buildClassObject',
        value: function buildClassObject() {
            var obj = {};

            for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
                classes[_key] = arguments[_key];
            }

            classes.forEach(function (s) {
                obj[s] = true;
            });
            return obj;
        }
        /**
         * Convert number [wide] to word
         *
         * @static
         * @param {any} wide
         * @returns
         *
         * @memberOf Util
         */

    }, {
        key: 'parseWide',
        value: function parseWide(wide) {
            if (wide) {
                wide = wide.toString();
                switch (wide) {
                    case '1':
                        wide = "one";
                        break;
                    case '2':
                        wide = "two";
                        break;
                    case '3':
                        wide = "three";
                        break;
                    case '4':
                        wide = "four";
                        break;
                    case '5':
                        wide = "five";
                        break;
                    case '6':
                        wide = "six";
                        break;
                    case '7':
                        wide = "seven";
                        break;
                    case '8':
                        wide = "eight";
                        break;
                    case '9':
                        wide = "nine";
                        break;
                    case '10':
                        wide = "ten";
                        break;
                    case '11':
                        wide = "eleven";
                        break;
                    case '12':
                        wide = "twelve";
                        break;
                    case '13':
                        wide = "thirteen";
                        break;
                    case '14':
                        wide = "fourteen";
                        break;
                    case '15':
                        wide = "fifteen";
                        break;
                    case '16':
                        wide = "sixteen";
                        break;
                }
                return 'wide ' + wide.trim();
            } else {
                return '';
            }
        }
        /**
         * Returns which one is not null nor undefined
         *
         * @static
         * @param {any} val1
         * @param {any} val2
         * @returns
         *
         * @memberOf Util
         */

    }, {
        key: 'pickNonEmpty',
        value: function pickNonEmpty(val1, val2) {
            if (val1 === undefined || val1 === null) return val2;
            return val1;
        }
        /**
         * Find model name from element and use it as data-validate attribute
         *
         * @static
         * @param {any} component
         * @param {JQuery} element
         *
         * @memberOf Util
         */

    }, {
        key: 'setDataValidateAttr',
        value: function setDataValidateAttr(component, element) {
            var id = component.$props.name;
            if (id) element.attr(DataValidateAttr, id);
        }
        /**
         * Build autonumber currency properties
         *
         * @static
         * @param {string} sign
         * @param {string} signPos
         * @returns {{ aSign: string, pSign: string }}
         *
         * @memberOf Util
         */

    }, {
        key: 'decodeCurrencyProperties',
        value: function decodeCurrencyProperties(sign, signPos) {
            if (signPos === 'left') {
                signPos = 'p';
                sign = sign.trim() + ' ';
            } else {
                signPos = 's';
                sign = ' ' + sign.trim();
            }
            return {
                aSign: sign,
                pSign: signPos
            };
        }
        // http://stackoverflow.com/a/2901136/1586914

    }, {
        key: 'numberFormat',
        value: function numberFormat(number, decimals, dec_point, thousands_sep) {
            // http://kevin.vanzonneveld.net
            // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +     bugfix by: Michael White (http://getsprink.com)
            // +     bugfix by: Benjamin Lupton
            // +     bugfix by: Allan Jensen (http://www.winternet.no)
            // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // +     bugfix by: Howard Yeend
            // +    revised by: Luke Smith (http://lucassmith.name)
            // +     bugfix by: Diogo Resende
            // +     bugfix by: Rival
            // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
            // +   improved by: davook
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Jay Klehr
            // +   improved by: Brett Zamir (http://brett-zamir.me)
            // +      input by: Amir Habibi (http://www.residence-mixte.com/)
            // +     bugfix by: Brett Zamir (http://brett-zamir.me)
            // +   improved by: Theriault
            // +   improved by: Drew Noakes
            // *     example 1: number_format(1234.56);
            // *     returns 1: '1,235'
            // *     example 2: number_format(1234.56, 2, ',', ' ');
            // *     returns 2: '1 234,56'
            // *     example 3: number_format(1234.5678, 2, '.', '');
            // *     returns 3: '1234.57'
            // *     example 4: number_format(67, 2, ',', '.');
            // *     returns 4: '67,00'
            // *     example 5: number_format(1000);
            // *     returns 5: '1,000'
            // *     example 6: number_format(67.311, 2);
            // *     returns 6: '67.31'
            // *     example 7: number_format(1000.55, 1);
            // *     returns 7: '1,000.6'
            // *     example 8: number_format(67000, 5, ',', '.');
            // *     returns 8: '67.000,00000'
            // *     example 9: number_format(0.9, 0);
            // *     returns 9: '1'
            // *    example 10: number_format('1.20', 2);
            // *    returns 10: '1.20'
            // *    example 11: number_format('1.20', 4);
            // *    returns 11: '1.2000'
            // *    example 12: number_format('1.2000', 3);
            // *    returns 12: '1.200'
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
                dec = typeof dec_point === 'undefined' ? '.' : dec_point,
                toFixedFix = function toFixedFix(n, prec) {
                // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                var k = Math.pow(10, prec);
                return Math.round(n * k) / k;
            },
                s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
        }
    }]);
    return Util;
}();

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _FieldBaseBase = function (_Virtual) {
    inherits(_FieldBaseBase, _Virtual);

    function _FieldBaseBase() {
        classCallCheck(this, _FieldBaseBase);
        return possibleConstructorReturn(this, (_FieldBaseBase.__proto__ || Object.getPrototypeOf(_FieldBaseBase)).apply(this, arguments));
    }

    return _FieldBaseBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _FieldBaseBase.prototype, "label", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _FieldBaseBase.prototype, "wide", void 0);
__decorate([vueTyped.Prop()], _FieldBaseBase.prototype, "kind", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: false
})], _FieldBaseBase.prototype, "disabled", void 0);

var FieldBase = function (_FieldBaseBase2) {
    inherits(FieldBase, _FieldBaseBase2);

    function FieldBase() {
        classCallCheck(this, FieldBase);
        return possibleConstructorReturn(this, (FieldBase.__proto__ || Object.getPrototypeOf(FieldBase)).apply(this, arguments));
    }

    createClass(FieldBase, [{
        key: 'render',
        value: function render(ch) {
            var slots = this.createComponent(ch) || this.$slots['default'];
            var contents = [];
            // require label?
            if (this.label) {
                contents.push(ch('label', this.label));
            }
            contents.push(slots);
            var style = this.wide ? 'fields' : 'field';
            if (this.kind) {
                style = this.kind + ' fields';
            }
            if (this.disabled) {
                style += ' disabled';
            }
            return ch('div', {
                'class': Util.buildClassObject(style, Util.parseWide(this.wide))
            }, contents);
            // return this.postRender(ch, el);
        }
        // postRender(ch, el) {
        // 	return el
        // }

    }, {
        key: 'emiter',
        value: function emiter(type) {
            var self = this;
            return function (e) {
                self.$emit(type, e['target'].value);
            };
        }
    }]);
    return FieldBase;
}(_FieldBaseBase);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _InputBase = function (_FieldBase) {
    inherits(_InputBase, _FieldBase);

    function _InputBase() {
        classCallCheck(this, _InputBase);
        return possibleConstructorReturn(this, (_InputBase.__proto__ || Object.getPrototypeOf(_InputBase)).apply(this, arguments));
    }

    return _InputBase;
}(FieldBase);

__decorate([vueTyped.Prop({
    type: String
})], _InputBase.prototype, "name", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _InputBase.prototype, "placeholder", void 0);
__decorate([vueTyped.Prop()], _InputBase.prototype, "value", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _InputBase.prototype, "password", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _InputBase.prototype, "icon", void 0);
__decorate([vueTyped.Prop({
    default: 'left'
})], _InputBase.prototype, "iconPos", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _InputBase.prototype, "css", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _InputBase.prototype, "selectOnFocus", void 0);

var Input = function (_InputBase2) {
    inherits(Input, _InputBase2);

    function Input() {
        classCallCheck(this, Input);
        return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    createClass(Input, [{
        key: 'target',
        value: function target() {
            return $(this.$el).find('input');
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            var attrs = {
                type: this.password ? 'password' : 'text',
                name: this.name,
                placeholder: this.placeholder
            };
            var css = 'ui input';
            if (this.disabled) {
                css += ' disabled';
                attrs['disabled'] = true;
            }
            var input = ch('input', {
                class: this.css,
                attrs: attrs,
                domProps: {
                    value: this.value
                },
                on: {
                    input: this.emiter('input'),
                    change: this.emiter('change')
                }
            });
            if (!this.icon) return ch('div', {
                class: css
            }, [input]);
            var icon = ch('i', {
                class: 'icon ' + this.icon
            });
            var contents = [];
            css = 'ui left icon input';
            if (this.iconPos == 'left') {
                contents.push(icon);
                contents.push(input);
            } else {
                contents.push(input);
                contents.push(icon);
                css = 'ui icon input';
            }
            return ch('div', {
                class: css
            }, contents);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            // initiate value
            var target = $(this.$el).find('input').val(this.value);
            if (this.selectOnFocus) target.on('focus', function () {
                $(this).select();
            });
            // make up for validation
            Util.setDataValidateAttr(this, target);
        }
    }]);
    return Input;
}(_InputBase);
Input = __decorate([vueTyped.Options()], Input);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _CalendarBase = function (_FieldBase) {
    inherits(_CalendarBase, _FieldBase);

    function _CalendarBase() {
        classCallCheck(this, _CalendarBase);
        return possibleConstructorReturn(this, (_CalendarBase.__proto__ || Object.getPrototypeOf(_CalendarBase)).apply(this, arguments));
    }

    return _CalendarBase;
}(FieldBase);

__decorate([vueTyped.Prop({
    type: String
})], _CalendarBase.prototype, "name", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _CalendarBase.prototype, "placeholder", void 0);
__decorate([vueTyped.Prop()], _CalendarBase.prototype, "value", void 0);
__decorate([vueTyped.Prop()], _CalendarBase.prototype, "rangeStart", void 0);
__decorate([vueTyped.Prop()], _CalendarBase.prototype, "rangeEnd", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _CalendarBase.prototype, "canClear", void 0);

var Calendar = function (_CalendarBase2) {
    inherits(Calendar, _CalendarBase2);

    function Calendar() {
        classCallCheck(this, Calendar);
        return possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).apply(this, arguments));
    }

    createClass(Calendar, [{
        key: 'calendarOptions',
        value: function calendarOptions() {
            return null;
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            var _this2 = this;

            var attr = this.calendarOptions();
            var children = [ch('i', { attrs: { 'class': attr.icon + ' icon' } }), ch('input', { attrs: { type: 'text', name: this.name, placeholder: this.placeholder } })];
            var css = 'ui input left icon';
            if (this.canClear) {
                css += ' action';
                children.push(ch('div', {
                    attrs: { 'class': 'ui icon button', 'type': 'button' },
                    on: {
                        'click': function click() {
                            $(_this2.$el)['calendar']('clear');
                        }
                    }
                }, [ch('i', { attrs: { 'class': 'close icon' } })]));
            }
            return ch('div', { attrs: { 'class': 'ui calendar' } }, [ch('div', { attrs: { 'class': css } }, children)]);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            this.setupUi();
            Util.setDataValidateAttr(this, $(this.$el).find('input'));
        }
    }, {
        key: 'onValueChanged',
        value: function onValueChanged(val, old) {
            if ($(this.$el).data('date') !== val) $(this.$el)['calendar']('set date', val, true, false);
        }
    }, {
        key: 'setupUi',
        value: function setupUi() {
            var _this3 = this;

            var attr = this.calendarOptions();
            var sender = this;
            var options$$1 = {
                type: attr.type,
                onChange: function onChange(date, text) {
                    _this3.$emit('input', date);
                },
                popupOptions: {
                    observeChanges: false
                }
            };
            if (this.rangeStart) {
                Object.assign(options$$1, {
                    startCalendar: this.rangeStart
                });
            }
            if (this.rangeEnd) {
                Object.assign(options$$1, {
                    endCalendar: this.rangeEnd
                });
            }
            if (this.canClear) {}
            $(this.$el)['calendar'](this.buildOptions(options$$1))['calendar']('set date', this.value, true, false);
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            return options$$1;
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el)['calendar']('destroy');
        }
    }]);
    return Calendar;
}(_CalendarBase);

__decorate([vueTyped.Watch('value')], Calendar.prototype, "onValueChanged", null);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _DateBase = function (_Calendar) {
    inherits(_DateBase, _Calendar);

    function _DateBase() {
        classCallCheck(this, _DateBase);
        return possibleConstructorReturn(this, (_DateBase.__proto__ || Object.getPrototypeOf(_DateBase)).apply(this, arguments));
    }

    return _DateBase;
}(Calendar);

__decorate([vueTyped.Prop({
    type: String
})], _DateBase.prototype, "format", void 0);

var Date = function (_DateBase2) {
    inherits(Date, _DateBase2);

    function Date() {
        classCallCheck(this, Date);
        return possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));
    }

    createClass(Date, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'calendarOptions',
        value: function calendarOptions() {
            return {
                type: 'date',
                icon: 'calendar'
            };
        }
    }, {
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val) {
            $(this.$el)['calendar']('destroy');
            this.setupUi();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            var format = !this.format || this.format == 'default' ? this.$UI.$settings.dateFormat : this.format;
            Object.assign(options$$1, {
                formatter: {
                    date: function date(_date, settings) {
                        return moment(_date).format(format);
                    }
                },
                parser: {
                    date: function date(text, settings) {
                        return moment(text, format).toDate();
                    }
                },
                monthFirst: !format.startsWith('DD')
            });
            return options$$1;
        }
    }]);
    return Date;
}(_DateBase);
__decorate([vueTyped.Watch('$UI.$settings.dateFormat')], Date.prototype, "onSettingsChanged", null);
Date = __decorate([vueTyped.Options()], Date);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _TimeBase = function (_Calendar) {
    inherits(_TimeBase, _Calendar);

    function _TimeBase() {
        classCallCheck(this, _TimeBase);
        return possibleConstructorReturn(this, (_TimeBase.__proto__ || Object.getPrototypeOf(_TimeBase)).apply(this, arguments));
    }

    return _TimeBase;
}(Calendar);

__decorate([vueTyped.Prop({
    type: String
})], _TimeBase.prototype, "format", void 0);

var Time = function (_TimeBase2) {
    inherits(Time, _TimeBase2);

    function Time() {
        classCallCheck(this, Time);
        return possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).apply(this, arguments));
    }

    createClass(Time, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'calendarOptions',
        value: function calendarOptions() {
            return {
                type: 'time',
                icon: 'time'
            };
        }
    }, {
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val) {
            $(this.$el)['calendar']('destroy');
            this.setupUi();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            var format = !this.format || this.format == 'default' ? this.$UI.$settings.timeFormat : this.format;
            Object.assign(options$$1, {
                formatter: {
                    time: function time(_time, settings) {
                        return moment(_time).format(format);
                    }
                },
                parser: {
                    time: function time(text, settings) {
                        return moment(text, format).toDate();
                    }
                },
                monthFirst: !format.startsWith('DD')
            });
            return options$$1;
        }
    }]);
    return Time;
}(_TimeBase);
__decorate([vueTyped.Watch('$UI.$settings.timeFormat')], Time.prototype, "onSettingsChanged", null);
Time = __decorate([vueTyped.Options()], Time);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _DatetimeBase = function (_Calendar) {
    inherits(_DatetimeBase, _Calendar);

    function _DatetimeBase() {
        classCallCheck(this, _DatetimeBase);
        return possibleConstructorReturn(this, (_DatetimeBase.__proto__ || Object.getPrototypeOf(_DatetimeBase)).apply(this, arguments));
    }

    return _DatetimeBase;
}(Calendar);

__decorate([vueTyped.Prop({
    type: String
})], _DatetimeBase.prototype, "format", void 0);

var DateTime = function (_DatetimeBase2) {
    inherits(DateTime, _DatetimeBase2);

    function DateTime() {
        classCallCheck(this, DateTime);
        return possibleConstructorReturn(this, (DateTime.__proto__ || Object.getPrototypeOf(DateTime)).apply(this, arguments));
    }

    createClass(DateTime, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'calendarOptions',
        value: function calendarOptions() {
            return {
                type: 'datetime',
                icon: 'calendar'
            };
        }
    }, {
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val, old) {
            if (old.dateFormat === val.dateFormat && old.timeFormat === val.timeFormat) return;
            $(this.$el)['calendar']('destroy');
            this.setupUi();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            var format = !this.format || this.format == 'default' ? this.$UI.$settings.dateFormat + ' ' + this.$UI.$settings.timeFormat : this.format;
            Object.assign(options$$1, {
                formatter: {
                    datetime: function datetime(date, settings) {
                        return moment(date).format(format);
                    }
                },
                parser: {
                    datetime: function datetime(text, settings) {
                        return moment(text, format).toDate();
                    }
                },
                monthFirst: !format.startsWith('DD')
            });
            return options$$1;
        }
    }]);
    return DateTime;
}(_DatetimeBase);
__decorate([vueTyped.Watch('$UI.$settings')], DateTime.prototype, "onSettingsChanged", null);
DateTime = __decorate([vueTyped.Options()], DateTime);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _NumericBaseBase = function (_FieldBase) {
    inherits(_NumericBaseBase, _FieldBase);

    function _NumericBaseBase() {
        classCallCheck(this, _NumericBaseBase);
        return possibleConstructorReturn(this, (_NumericBaseBase.__proto__ || Object.getPrototypeOf(_NumericBaseBase)).apply(this, arguments));
    }

    return _NumericBaseBase;
}(FieldBase);

__decorate([vueTyped.Prop({
    type: String
})], _NumericBaseBase.prototype, "name", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _NumericBaseBase.prototype, "placeholder", void 0);
__decorate([vueTyped.Prop()], _NumericBaseBase.prototype, "value", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _NumericBaseBase.prototype, "groupSeparator", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _NumericBaseBase.prototype, "decimalSeparator", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _NumericBaseBase.prototype, "decimalPlaces", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _NumericBaseBase.prototype, "min", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _NumericBaseBase.prototype, "max", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: false
})], _NumericBaseBase.prototype, "integer", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _NumericBaseBase.prototype, "selectOnFocus", void 0);

require('autonumeric');

var NumericBase = function (_NumericBaseBase2) {
    inherits(NumericBase, _NumericBaseBase2);

    function NumericBase() {
        classCallCheck(this, NumericBase);
        return possibleConstructorReturn(this, (NumericBase.__proto__ || Object.getPrototypeOf(NumericBase)).apply(this, arguments));
    }

    createClass(NumericBase, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(val, old) {
            if (this.$el.querySelector('input') == document.activeElement) return;
            $(this.$el).find('input').autoNumeric('set', val);
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            return ch('input', {
                attrs: {
                    type: 'text',
                    name: this.name,
                    placeholder: this.placeholder
                },
                on: {
                    input: this.emiter('input'),
                    change: this.emiter('change')
                }
            });
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            console.log('called mounted');
            this.setupUI();
        }
    }, {
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val) {
            $(this.$el).find('input').autoNumeric('destroy');
            this.setupUI();
        }
    }, {
        key: 'setupUI',
        value: function setupUI() {
            var _this2 = this;

            var def = this.$UI.$settings.numeric;
            var opt = {
                aDec: Util.pickNonEmpty(this.decimalSeparator, def.decimalSeparator),
                aSep: Util.pickNonEmpty(this.groupSeparator, def.groupSeparator),
                mDec: Util.pickNonEmpty(this.decimalPlaces, def.decimalPlaces),
                vMin: Util.pickNonEmpty(this.min, def.min),
                vMax: Util.pickNonEmpty(this.max, def.max)
            };
            if (this.integer === true) {
                opt.mDec = 0;
                opt.aSep = '';
            }
            var target = $(this.$el).find('input').autoNumeric('init', this.buildOptions(opt)).autoNumeric('set', this.value || 0).on('keyup change paste propertychange', function (v) {
                var value = $(v.target).autoNumeric('get');
                _this2.$emit('input', value);
                _this2.$emit('change', value);
            });
            if (this.selectOnFocus) target.on('focus', function () {
                $(this).select();
            });
            Util.setDataValidateAttr(this, target);
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).find('input').autoNumeric('destroy');
        }
    }]);
    return NumericBase;
}(_NumericBaseBase);

__decorate([vueTyped.Watch('value')], NumericBase.prototype, "valueChanged", null);
__decorate([vueTyped.Watch('$UI.$settings.numeric', true)], NumericBase.prototype, "onSettingsChanged", null);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _NumericBase = function (_NumericBase2) {
  inherits(_NumericBase, _NumericBase2);

  function _NumericBase() {
    classCallCheck(this, _NumericBase);
    return possibleConstructorReturn(this, (_NumericBase.__proto__ || Object.getPrototypeOf(_NumericBase)).apply(this, arguments));
  }

  return _NumericBase;
}(NumericBase);

// ref: http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events
// ref: https://github.com/BobKnothe/autoNumeric
var Numeric = function (_NumericBase2) {
    inherits(Numeric, _NumericBase2);

    function Numeric() {
        classCallCheck(this, Numeric);
        return possibleConstructorReturn(this, (Numeric.__proto__ || Object.getPrototypeOf(Numeric)).apply(this, arguments));
    }

    createClass(Numeric, [{
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            return options$$1;
        }
    }]);
    return Numeric;
}(_NumericBase);
Numeric = __decorate([vueTyped.Options()], Numeric);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _CurrencyBase = function (_NumericBase) {
    inherits(_CurrencyBase, _NumericBase);

    function _CurrencyBase() {
        classCallCheck(this, _CurrencyBase);
        return possibleConstructorReturn(this, (_CurrencyBase.__proto__ || Object.getPrototypeOf(_CurrencyBase)).apply(this, arguments));
    }

    return _CurrencyBase;
}(NumericBase);

__decorate([vueTyped.Prop({
    type: String
})], _CurrencyBase.prototype, "sign", void 0);
__decorate([vueTyped.Prop()], _CurrencyBase.prototype, "signPos", void 0);

require('autonumeric');
var Currency = function (_CurrencyBase2) {
    inherits(Currency, _CurrencyBase2);

    function Currency() {
        classCallCheck(this, Currency);
        return possibleConstructorReturn(this, (Currency.__proto__ || Object.getPrototypeOf(Currency)).apply(this, arguments));
    }

    createClass(Currency, [{
        key: 'beforeCreate',
        value: function beforeCreate() {
            this.$options.props['signPos'].validator = function (val) {
                return val === ('left' || 'right');
            };
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            var signPos = Util.pickNonEmpty(this.signPos, this.$UI.$settings.numeric.signPos);
            var sign = Util.pickNonEmpty(this.sign, this.$UI.$settings.numeric.sign);
            return Object.assign(options$$1, Util.decodeCurrencyProperties(sign, signPos));
        }
    }]);
    return Currency;
}(_CurrencyBase);
Currency = __decorate([vueTyped.Options()], Currency);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _RadioBase = function (_Virtual) {
    inherits(_RadioBase, _Virtual);

    function _RadioBase() {
        classCallCheck(this, _RadioBase);
        return possibleConstructorReturn(this, (_RadioBase.__proto__ || Object.getPrototypeOf(_RadioBase)).apply(this, arguments));
    }

    return _RadioBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _RadioBase.prototype, "name", void 0);
__decorate([vueTyped.Prop()], _RadioBase.prototype, "val", void 0);
__decorate([vueTyped.Prop()], _RadioBase.prototype, "value", void 0);

var Radio = function (_RadioBase2) {
    inherits(Radio, _RadioBase2);

    function Radio() {
        classCallCheck(this, Radio);
        return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    createClass(Radio, [{
        key: 'target',
        value: function target() {
            return $(this.$el).find('.ui.radio');
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            var p = this.$parent;
            var name = this.name;
            if (p.$options.name == 'RadioGroup') {
                name = name || p['groupName'];
            }
            var self = this;
            $(this.$el).find('input').attr('name', name).on('change', function () {
                self.$emit('input', self.val);
            });
            Vue.nextTick(function () {
                _this2.target().checkbox();
            });
        }
    }]);
    return Radio;
}(_RadioBase);
Radio = __decorate([vueTyped.Options({
    template: '\n\t<div class="field">\n\t\t<div class="ui radio checkbox">\n\t\t\t<input type="radio" class="hidden" :checked="value==val">\n\t\t\t<label><slot></slot></label>\n\t\t</div>\n\t</div>\n\t'
})], Radio);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _RadioGroupBase = function (_FieldBase) {
    inherits(_RadioGroupBase, _FieldBase);

    function _RadioGroupBase() {
        classCallCheck(this, _RadioGroupBase);
        return possibleConstructorReturn(this, (_RadioGroupBase.__proto__ || Object.getPrototypeOf(_RadioGroupBase)).apply(this, arguments));
    }

    return _RadioGroupBase;
}(FieldBase);

__decorate([vueTyped.Prop({
    type: String
})], _RadioGroupBase.prototype, "name", void 0);

var RadioGroup = function (_RadioGroupBase2) {
    inherits(RadioGroup, _RadioGroupBase2);

    function RadioGroup() {
        classCallCheck(this, RadioGroup);
        return possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
    }

    createClass(RadioGroup, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            this.groupName = this.name || 'radio-group-' + this['_uid'];
            return null;
        }
    }]);
    return RadioGroup;
}(_RadioGroupBase);
RadioGroup = __decorate([vueTyped.Options({
    template: '\n\t<div class="ui radio checkbox">\n\t\t<input type="radio" class="hidden" :checked="value==val">\n\t\t<label><slot></slot></label>\n\t</div>\n\t'
})], RadioGroup);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _CheckboxBase = function (_Virtual) {
    inherits(_CheckboxBase, _Virtual);

    function _CheckboxBase() {
        classCallCheck(this, _CheckboxBase);
        return possibleConstructorReturn(this, (_CheckboxBase.__proto__ || Object.getPrototypeOf(_CheckboxBase)).apply(this, arguments));
    }

    return _CheckboxBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _CheckboxBase.prototype, "name", void 0);
__decorate([vueTyped.Prop()], _CheckboxBase.prototype, "value", void 0);
__decorate([vueTyped.Prop()], _CheckboxBase.prototype, "enabled", void 0);
__decorate([vueTyped.Prop()], _CheckboxBase.prototype, "kind", void 0);
__decorate([vueTyped.Prop()], _CheckboxBase.prototype, "val", void 0);

var Checkbox = function (_CheckboxBase2) {
    inherits(Checkbox, _CheckboxBase2);

    function Checkbox() {
        classCallCheck(this, Checkbox);

        var _this = possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));

        _this.css = "ui checkbox";
        _this.checked = false;
        _this._isArray = false;
        return _this;
    }

    createClass(Checkbox, [{
        key: 'target',
        value: function target() {
            return $(this.$el).find('.ui.checkbox');
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(val) {
            if (this._isArray) {
                this.checked = val.indexOf(this.val) > -1;
            } else {
                this.checked = val !== false;
            }
        }
    }, {
        key: 'enabledChanged',
        value: function enabledChanged(val) {
            this.sui('set ' + (val !== false ? 'enabled' : 'disabled'));
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            var name = this.name;
            var self = this;
            var ready = false;
            this._isArray = this.value && _typeof(this.value) === 'object' && this.value['length'] !== undefined;
            this._updateCss();
            var target = $(this.$el).find('input').attr('name', name).on('change', function (e) {
                if (!ready) return;
                var checkedValue = e.target['checked'] ? e.target['value'] : false;
                if (self._isArray) {
                    // value change emitted automatically on modified array value
                    if (checkedValue) {
                        self.value.push(e.target['value']);
                    } else {
                        self.value.splice(self.value.indexOf(e.target['value']), 1);
                    }
                } else {
                    // manually emit
                    self.$emit('input', checkedValue);
                }
            });
            Util.setDataValidateAttr(this, target);
            Vue.nextTick(function () {
                if (_this2._isArray) {
                    _this2.checked = _this2.value.indexOf(_this2.val) > -1;
                } else {
                    _this2.checked = _this2.val === _this2.value || _this2.value === true || _this2.value === 'true';
                }
                _this2.enabledChanged(_this2.enabled);
                _this2.sui(_this2.checked ? 'check' : 'uncheck');
                ready = true;
            });
        }
    }, {
        key: 'sui',
        value: function sui(arg1, arg2) {
            return this.target().checkbox(arg1, arg2);
        }
    }, {
        key: '_updateCss',
        value: function _updateCss() {
            this.css = "ui checkbox";
            if (this.kind) {
                this.css += ' ' + this.kind;
            }
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).find('.ui.checkbox').checkbox('destroy');
        }
    }, {
        key: 'checkedValue',
        get: function get() {
            return this.val || true;
        }
    }]);
    return Checkbox;
}(_CheckboxBase);
__decorate([vueTyped.Watch('value', true)], Checkbox.prototype, "valueChanged", null);
__decorate([vueTyped.Watch('enabled')], Checkbox.prototype, "enabledChanged", null);
Checkbox = __decorate([vueTyped.Component({
    template: '\n\t<div class="inline field">\n    <div :class="css">\n      <input type="checkbox" class="hidden" :checked="checked" :value="checkedValue">\n      <label><slot></slot></label>\n    </div>\n  </div>\n\t'
})], Checkbox);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _DropdownBase = function (_FieldBase) {
    inherits(_DropdownBase, _FieldBase);

    function _DropdownBase() {
        classCallCheck(this, _DropdownBase);
        return possibleConstructorReturn(this, (_DropdownBase.__proto__ || Object.getPrototypeOf(_DropdownBase)).apply(this, arguments));
    }

    return _DropdownBase;
}(FieldBase);

__decorate([vueTyped.Prop({
    type: String
})], _DropdownBase.prototype, "name", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _DropdownBase.prototype, "placeholder", void 0);
__decorate([vueTyped.Prop()], _DropdownBase.prototype, "value", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _DropdownBase.prototype, "search", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _DropdownBase.prototype, "multiple", void 0);
__decorate([vueTyped.Prop({
    type: Object
})], _DropdownBase.prototype, "settings", void 0);

var Dropdown = function (_DropdownBase2) {
    inherits(Dropdown, _DropdownBase2);

    function Dropdown() {
        classCallCheck(this, Dropdown);

        var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));

        _this.selectedItems = undefined;
        _this._htmlItems = '';
        return _this;
    }

    createClass(Dropdown, [{
        key: 'target',
        value: function target() {
            return $(this.$el.querySelector('.ui.dropdown'));
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            return ch('div', { 'class': 'ui selection dropdown' }, [ch('input', { attrs: { type: 'hidden', name: this.name } }), ch('i', { 'class': 'dropdown icon' }), ch('div', { 'class': 'default text' }, this.placeholder), ch('div', { 'class': 'menu', 'ref': 'menu' }, this.$slots['default'])]);
        }
    }, {
        key: 'beforeUpdate',
        value: function beforeUpdate() {
            // store dropdown items state
            this._htmlItems = this.$refs['menu'].innerHTML;
        }
    }, {
        key: 'updated',
        value: function updated() {
            // refresh dropdown when items has been changed
            if (this._htmlItems !== this.$refs['menu'].innerHTML) {
                this.sui('refresh');
            }
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            var self = this;
            var el = this.target();
            // search ?
            if (this.search === true) {
                el.addClass('search');
            }
            // multiple ?
            if (this.multiple === true) {
                el.addClass('multiple');
                this.selectedItems = [];
                if (this.value) {
                    if (typeof this.value.length === "undefined") throw "v-model must be array for dropdown with multiple option!";
                } else {
                    this.selectedItems = [];
                }
            } else {
                this.selectedItems = this.value;
            }
            var settings = _.merge({
                forceSelection: false,
                'onChange': function onChange(arg) {
                    if (!self.multiple) self.selectedItems = arg;
                    self.$emit('input', self.selectedItems);
                },
                'onAdd': function onAdd(val) {
                    self.selectedItems.push(val);
                },
                'onRemove': function onRemove(val) {
                    self.selectedItems.splice(self.selectedItems.indexOf(val), 1);
                }
            }, this.$UI.$settings.dropdown, this.settings || {});
            // init semantic-ui dropdown
            this.sui(settings);
            // manual force selection
            $(this.$el).find('input.search').on('blur', function (e) {
                var text = $(e.target).val();
                if (text) {
                    (function () {
                        text = text.trim().toUpperCase();
                        var val = _this2.sui('get value');
                        var foundFirstMatch = false;
                        $(_this2.$el).find('.menu').children('.item').each(function (i, el) {
                            if (!foundFirstMatch && el.textContent.trim().toUpperCase().startsWith(text)) {
                                val = $(el).data('value');
                                foundFirstMatch = true;
                            }
                        });
                        _this2.sui('set selected', val);
                        $(e.target).val('');
                    })();
                }
            });
            // make up data validate attr
            Util.setDataValidateAttr(this, $(this.$el).find('input'));
            // assign selected values
            this.valueChanged(this.value);
            // set disabled state
            this.disabledChanged(this.disabled);
        }
    }, {
        key: 'disabledChanged',
        value: function disabledChanged(val) {
            var el = this.target();
            if (val) el.addClass('disabled');else el.removeClass('disabled');
            this.sui('refresh');
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(val) {
            if (val === null || val === undefined) {
                this.sui('clear');
            } else {
                if (this.multiple === true && this.selectedItems.toString() != val.toString()) {
                    this.sui('set exactly', val);
                } else this.sui('set selected', val);
            }
        }
    }, {
        key: 'sui',
        value: function sui(arg1, arg2) {
            return this.target().dropdown(arg1, arg2);
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            this.target().dropdown('destroy');
        }
    }]);
    return Dropdown;
}(_DropdownBase);
__decorate([vueTyped.Watch('disabled')], Dropdown.prototype, "disabledChanged", null);
__decorate([vueTyped.Watch('value')], Dropdown.prototype, "valueChanged", null);
Dropdown = __decorate([vueTyped.Options()], Dropdown);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _DropdownItemBase = function (_Virtual) {
  inherits(_DropdownItemBase, _Virtual);

  function _DropdownItemBase() {
    classCallCheck(this, _DropdownItemBase);
    return possibleConstructorReturn(this, (_DropdownItemBase.__proto__ || Object.getPrototypeOf(_DropdownItemBase)).apply(this, arguments));
  }

  return _DropdownItemBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop()], _DropdownItemBase.prototype, "value", void 0);

var DropdownItem = function (_DropdownItemBase2) {
    inherits(DropdownItem, _DropdownItemBase2);

    function DropdownItem() {
        classCallCheck(this, DropdownItem);
        return possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
    }

    createClass(DropdownItem, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }]);
    return DropdownItem;
}(_DropdownItemBase);
DropdownItem = __decorate([vueTyped.Component({
    template: '<div class="item" :data-value="value"><slot></slot></div>'
})], DropdownItem);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _ButtonBase = function (_Virtual) {
    inherits(_ButtonBase, _Virtual);

    function _ButtonBase() {
        classCallCheck(this, _ButtonBase);
        return possibleConstructorReturn(this, (_ButtonBase.__proto__ || Object.getPrototypeOf(_ButtonBase)).apply(this, arguments));
    }

    return _ButtonBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _ButtonBase.prototype, "icon", void 0);
__decorate([vueTyped.Prop()], _ButtonBase.prototype, "iconPos", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _ButtonBase.prototype, "animation", void 0);
__decorate([vueTyped.Prop()], _ButtonBase.prototype, "disabled", void 0);
__decorate([vueTyped.Prop()], _ButtonBase.prototype, "size", void 0);
__decorate([vueTyped.Prop()], _ButtonBase.prototype, "float", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _ButtonBase.prototype, "color", void 0);
__decorate([vueTyped.Prop({
    type: String,
    default: 'button'
})], _ButtonBase.prototype, "type", void 0);

var Button = function (_ButtonBase2) {
    inherits(Button, _ButtonBase2);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'loading',
        value: function loading(state) {
            var target = this.target();
            if (state) return target.addClass('loading');
            return target.removeClass('loading');
        }
    }, {
        key: 'render',
        value: function render(ch) {
            var css = 'ui button';
            var children = [];
            var hiddenSlot = this.$slots['hidden'];
            if (hiddenSlot) {
                css += ' animated';
                if (this.animation) css += ' ' + this.animation;
                children.push(ch('div', {
                    'class': 'visible content'
                }, this.$slots['default']));
                children.push(ch('div', {
                    'class': 'hidden content'
                }, hiddenSlot));
            } else {
                children = this.$slots['default'];
            }
            if (this.disabled) {
                css += ' disabled';
            }
            if (this.size) {
                css += ' ' + this.size;
            }
            if (this.float) {
                css += ' ' + this.float + ' floated';
            }
            if (this.color) {
                css += ' ' + this.color;
            }
            var el = ch('button', {
                attrs: {
                    type: this.type
                },
                on: {
                    'click': this.click
                },
                'class': css
            }, children);
            return el;
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            if (this.icon) {
                var iconEl = '<i class="' + this.icon + ' icon"></i>';
                var target = this.target();
                if (this.iconPos === 'right') target.addClass('icon').append(' ').append(iconEl);else target.addClass('icon').prepend(' ').prepend(iconEl);
            }
        }
    }, {
        key: 'click',
        value: function click(e) {
            this.$emit('click', e);
        }
    }, {
        key: 'setDisabled',
        value: function setDisabled(disabled) {
            var target = this.target();
            if (disabled) {
                target.addClass('disabled');
            } else {
                target.removeClass('disabled');
            }
        }
    }, {
        key: 'onDisabledChanged',
        value: function onDisabledChanged(v) {
            this.setDisabled(!v);
        }
    }]);
    return Button;
}(_ButtonBase);
__decorate([vueTyped.Watch('disabled')], Button.prototype, "onDisabledChanged", null);
Button = __decorate([vueTyped.Options({})], Button);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _FieldBase = function (_FieldBase2) {
  inherits(_FieldBase, _FieldBase2);

  function _FieldBase() {
    classCallCheck(this, _FieldBase);
    return possibleConstructorReturn(this, (_FieldBase.__proto__ || Object.getPrototypeOf(_FieldBase)).apply(this, arguments));
  }

  return _FieldBase;
}(FieldBase);

var Field = function (_FieldBase2) {
    inherits(Field, _FieldBase2);

    function Field() {
        classCallCheck(this, Field);
        return possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
    }

    createClass(Field, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            return null;
        }
    }]);
    return Field;
}(_FieldBase);
Field = __decorate([vueTyped.Options()], Field);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _FieldsInlineBase = function (_Virtual) {
    inherits(_FieldsInlineBase, _Virtual);

    function _FieldsInlineBase() {
        classCallCheck(this, _FieldsInlineBase);
        return possibleConstructorReturn(this, (_FieldsInlineBase.__proto__ || Object.getPrototypeOf(_FieldsInlineBase)).apply(this, arguments));
    }

    return _FieldsInlineBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _FieldsInlineBase.prototype, "label", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _FieldsInlineBase.prototype, "wide", void 0);

var FieldsInline = function (_FieldsInlineBase2) {
    inherits(FieldsInline, _FieldsInlineBase2);

    function FieldsInline() {
        classCallCheck(this, FieldsInline);
        return possibleConstructorReturn(this, (FieldsInline.__proto__ || Object.getPrototypeOf(FieldsInline)).apply(this, arguments));
    }

    createClass(FieldsInline, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'render',
        value: function render(ch) {
            var contents = [];
            // require label?
            if (this.label) {
                contents.push(ch('label', this.label));
            }
            contents.push(this.$slots['default']);
            return ch('div', {
                'class': Util.buildClassObject('fields inline', Util.parseWide(this.wide))
            }, contents);
        }
    }]);
    return FieldsInline;
}(_FieldsInlineBase);
FieldsInline = __decorate([vueTyped.Options()], FieldsInline);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _FieldsGroupBase = function (_Virtual) {
    inherits(_FieldsGroupBase, _Virtual);

    function _FieldsGroupBase() {
        classCallCheck(this, _FieldsGroupBase);
        return possibleConstructorReturn(this, (_FieldsGroupBase.__proto__ || Object.getPrototypeOf(_FieldsGroupBase)).apply(this, arguments));
    }

    return _FieldsGroupBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _FieldsGroupBase.prototype, "label", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _FieldsGroupBase.prototype, "wide", void 0);

var FieldsGroup = function (_FieldsGroupBase2) {
    inherits(FieldsGroup, _FieldsGroupBase2);

    function FieldsGroup() {
        classCallCheck(this, FieldsGroup);
        return possibleConstructorReturn(this, (FieldsGroup.__proto__ || Object.getPrototypeOf(FieldsGroup)).apply(this, arguments));
    }

    createClass(FieldsGroup, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'render',
        value: function render(ch) {
            var contents = [];
            // require label?
            if (this.label) {
                contents.push(ch('label', this.label));
            }
            contents.push(this.$slots['default']);
            return ch('div', {
                'class': Util.buildClassObject('fields group', Util.parseWide(this.wide))
            }, contents);
        }
    }]);
    return FieldsGroup;
}(_FieldsGroupBase);
FieldsGroup = __decorate([vueTyped.Options()], FieldsGroup);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _TabBase = function (_Virtual) {
  inherits(_TabBase, _Virtual);

  function _TabBase() {
    classCallCheck(this, _TabBase);
    return possibleConstructorReturn(this, (_TabBase.__proto__ || Object.getPrototypeOf(_TabBase)).apply(this, arguments));
  }

  return _TabBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop()], _TabBase.prototype, "kind", void 0);

var Tab = function (_TabBase2) {
    inherits(Tab, _TabBase2);

    function Tab() {
        classCallCheck(this, Tab);

        var _this = possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));

        _this.activeTab = undefined;
        _this.css = '';
        _this.items = [];
        _this.firstTab = undefined;
        return _this;
    }

    createClass(Tab, [{
        key: 'changeTab',
        value: function changeTab(path) {
            return $(this.$el).find('.item').tab('change tab', path);
        }
    }, {
        key: 'created',
        value: function created() {
            this.items = [];
            this.updateStyle();
        }
    }, {
        key: 'target',
        value: function target() {
            return $(this.$el).find('.menu .item');
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            Vue.nextTick(function () {
                _this2.activeTab = _this2.firstTab;
                _this2._suiInit();
            });
        }
    }, {
        key: 'onStyleChanged',
        value: function onStyleChanged(style) {
            var _this3 = this;

            this.updateStyle();
            Vue.nextTick(function () {
                _this3._suiInit();
            });
        }
    }, {
        key: 'createItem',
        value: function createItem(item) {
            this.items.push(item);
            var tabName = item.path || this._tabName(this.items.length);
            if (!this.firstTab) this.firstTab = tabName;
            if (item.active == true) {
                this.activeTab = tabName;
            }
            return tabName;
        }
        // create and set active semantic-ui tab

    }, {
        key: '_suiInit',
        value: function _suiInit() {
            var el = $(this.$el).find('.menu .item');
            var self = this;
            el.tab({
                context: $(this.$el), onVisible: function onVisible() {
                    self.activeTab = $(this).attr('data-tab');
                }
            });
            el.tab('change tab', this.activeTab);
        }
    }, {
        key: '_tabName',
        value: function _tabName(index) {
            return 'tab-' + this['_uid'] + '-' + index;
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            switch (this.kind) {
                case 'menu':
                    this.css = 'ui top secondary menu';
                    break;
                case 'pointing':
                    this.css = 'ui pointing secondary menu';
                    break;
                default:
                    this.css = 'ui top attached tabular menu';
                    break;
            }
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            this.target().tab('destroy');
        }
    }]);
    return Tab;
}(_TabBase);
__decorate([vueTyped.Watch('kind')], Tab.prototype, "onStyleChanged", null);
Tab = __decorate([vueTyped.Options({
    template: '<div>\n\t\t<div :class="css">\n\t\t\t<a v-for="i in items" class="item" v-bind:data-tab="i.dataTab">\n  \t\t\t{{i.caption}}\n\t\t\t</a>\n\t\t</div>\n\t\t<slot></slot>\n\t</div>'
})], Tab);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _TabItemBase = function (_Virtual) {
    inherits(_TabItemBase, _Virtual);

    function _TabItemBase() {
        classCallCheck(this, _TabItemBase);
        return possibleConstructorReturn(this, (_TabItemBase.__proto__ || Object.getPrototypeOf(_TabItemBase)).apply(this, arguments));
    }

    return _TabItemBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _TabItemBase.prototype, "caption", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _TabItemBase.prototype, "active", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _TabItemBase.prototype, "path", void 0);

var TabItem = function (_TabItemBase2) {
    inherits(TabItem, _TabItemBase2);

    function TabItem() {
        classCallCheck(this, TabItem);

        var _this = possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));

        _this.dataTab = '';
        _this.css = "ui tab segment";
        return _this;
    }

    createClass(TabItem, [{
        key: 'onKindChanged',
        value: function onKindChanged(style) {
            this.updateStyle(style);
        }
    }, {
        key: 'created',
        value: function created() {
            this.updateStyle();
            this.dataTab = this.$parent['createItem'](this);
        }
    }, {
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle(style) {
            style = style || this.$parent['kind'];
            switch (style) {
                case 'menu':
                case 'pointing':
                    this.css = 'ui tab segment';
                    break;
                default:
                    this.css = 'ui bottom attached tab segment';
                    break;
            }
        }
    }]);
    return TabItem;
}(_TabItemBase);
__decorate([vueTyped.Watch('$parent.kind')], TabItem.prototype, "onKindChanged", null);
TabItem = __decorate([vueTyped.Options({
    template: '<div :class="css" v-bind:data-tab="dataTab"><slot></slot></div>'
})], TabItem);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _PusherBase = function (_Virtual) {
  inherits(_PusherBase, _Virtual);

  function _PusherBase() {
    classCallCheck(this, _PusherBase);
    return possibleConstructorReturn(this, (_PusherBase.__proto__ || Object.getPrototypeOf(_PusherBase)).apply(this, arguments));
  }

  return _PusherBase;
}(vueTyped.Virtual());

var Pusher = function (_PusherBase2) {
    inherits(Pusher, _PusherBase2);

    function Pusher() {
        classCallCheck(this, Pusher);
        return possibleConstructorReturn(this, (Pusher.__proto__ || Object.getPrototypeOf(Pusher)).apply(this, arguments));
    }

    createClass(Pusher, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }]);
    return Pusher;
}(_PusherBase);
Pusher = __decorate([vueTyped.Options({
    template: '<div class="pusher"><slot></slot></div>'
})], Pusher);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _SegmentBase = function (_Virtual) {
  inherits(_SegmentBase, _Virtual);

  function _SegmentBase() {
    classCallCheck(this, _SegmentBase);
    return possibleConstructorReturn(this, (_SegmentBase.__proto__ || Object.getPrototypeOf(_SegmentBase)).apply(this, arguments));
  }

  return _SegmentBase;
}(vueTyped.Virtual());

var Segment = function (_SegmentBase2) {
    inherits(Segment, _SegmentBase2);

    function Segment() {
        classCallCheck(this, Segment);
        return possibleConstructorReturn(this, (Segment.__proto__ || Object.getPrototypeOf(Segment)).apply(this, arguments));
    }

    createClass(Segment, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }]);
    return Segment;
}(_SegmentBase);
Segment = __decorate([vueTyped.Options({
    template: '<div class="ui segment"><slot></slot></div>'
})], Segment);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _AccordionBase = function (_Virtual) {
    inherits(_AccordionBase, _Virtual);

    function _AccordionBase() {
        classCallCheck(this, _AccordionBase);
        return possibleConstructorReturn(this, (_AccordionBase.__proto__ || Object.getPrototypeOf(_AccordionBase)).apply(this, arguments));
    }

    return _AccordionBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _AccordionBase.prototype, "exclusive", void 0);
__decorate([vueTyped.Prop({
    type: String,
    default: 'click'
})], _AccordionBase.prototype, "on", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _AccordionBase.prototype, "animateChildren", void 0);
__decorate([vueTyped.Prop({
    type: Number,
    default: 500
})], _AccordionBase.prototype, "duration", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _AccordionBase.prototype, "closeNested", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: true
})], _AccordionBase.prototype, "collapsible", void 0);

var Accordion = function (_AccordionBase2) {
    inherits(Accordion, _AccordionBase2);

    function Accordion() {
        classCallCheck(this, Accordion);
        return possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }

    createClass(Accordion, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var self = this;
            this.target().accordion({
                exclusive: this.exclusive,
                on: this.on,
                animateChildren: this.animateChildren,
                closeNested: this.closeNested,
                collapsible: this.collapsible,
                duration: this.duration,
                onOpening: function onOpening() {
                    self.$emit('opening', this);
                },
                onOpen: function onOpen() {
                    self.$emit('open', this);
                },
                onClosing: function onClosing() {
                    self.$emit('closing', this);
                },
                onClose: function onClose() {
                    self.$emit('close', this);
                },
                onChange: function onChange() {
                    self.$emit('change', this);
                }
            });
        }
    }]);
    return Accordion;
}(_AccordionBase);
Accordion = __decorate([vueTyped.Options({
    template: '<div class="ui accordion"><slot></slot></div>'
})], Accordion);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _AccordionItemBase = function (_Virtual) {
    inherits(_AccordionItemBase, _Virtual);

    function _AccordionItemBase() {
        classCallCheck(this, _AccordionItemBase);
        return possibleConstructorReturn(this, (_AccordionItemBase.__proto__ || Object.getPrototypeOf(_AccordionItemBase)).apply(this, arguments));
    }

    return _AccordionItemBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _AccordionItemBase.prototype, "title", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _AccordionItemBase.prototype, "active", void 0);

var AccordionItem = function (_AccordionItemBase2) {
    inherits(AccordionItem, _AccordionItemBase2);

    function AccordionItem() {
        classCallCheck(this, AccordionItem);
        return possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
    }

    createClass(AccordionItem, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'activeCss',
        get: function get() {
            return this.active ? 'active ' : '';
        }
    }]);
    return AccordionItem;
}(_AccordionItemBase);
AccordionItem = __decorate([vueTyped.Options({
    template: '<div>\n\t\t<div :class="activeCss + \'title\'">\n\t\t\t<i class="dropdown icon"></i> {{title}}\n\t\t</div>\n\t\t<div :class="activeCss + \'content\'">\n\t\t\t<slot></slot>\n\t\t</div>\n\t</div>'
})], AccordionItem);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _MenuBaseBase = function (_Virtual) {
    inherits(_MenuBaseBase, _Virtual);

    function _MenuBaseBase() {
        classCallCheck(this, _MenuBaseBase);
        return possibleConstructorReturn(this, (_MenuBaseBase.__proto__ || Object.getPrototypeOf(_MenuBaseBase)).apply(this, arguments));
    }

    return _MenuBaseBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop()], _MenuBaseBase.prototype, "sidebar", void 0);
__decorate([vueTyped.Prop()], _MenuBaseBase.prototype, "sidebarToggle", void 0);

var MenuBase = function (_MenuBaseBase2) {
    inherits(MenuBase, _MenuBaseBase2);

    function MenuBase() {
        classCallCheck(this, MenuBase);
        return possibleConstructorReturn(this, (MenuBase.__proto__ || Object.getPrototypeOf(MenuBase)).apply(this, arguments));
    }

    createClass(MenuBase, [{
        key: 'mounted',
        value: function mounted() {
            if (this.sidebar) {
                var el = $(this.$el);
                if (this.sidebar == 'visible') {
                    el.addClass('visible');
                }
                el.addClass('sidebar');
                // SINCE IT'S IMPOSSIBLE TO BIND EL TO <BODY> 
                // THEN USE PARENT EL OF SIDEBAR AS A CONTEXT		
                var sidebar = el.sidebar({
                    context: el.parent()
                });
                if (this.sidebarToggle) {
                    sidebar.sidebar('attach events', this.sidebarToggle, 'toggle');
                }
            }
        }
    }]);
    return MenuBase;
}(_MenuBaseBase);
__decorate([vueTyped.Prop()], MenuBase.prototype, "sidebar", void 0);
__decorate([vueTyped.Prop()], MenuBase.prototype, "sidebarToggle", void 0);
MenuBase = __decorate([vueTyped.Component()], MenuBase);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _MenuVerticalBase = function (_MenuBase) {
  inherits(_MenuVerticalBase, _MenuBase);

  function _MenuVerticalBase() {
    classCallCheck(this, _MenuVerticalBase);
    return possibleConstructorReturn(this, (_MenuVerticalBase.__proto__ || Object.getPrototypeOf(_MenuVerticalBase)).apply(this, arguments));
  }

  return _MenuVerticalBase;
}(MenuBase);

var MenuVertical = function (_MenuVerticalBase2) {
    inherits(MenuVertical, _MenuVerticalBase2);

    function MenuVertical() {
        classCallCheck(this, MenuVertical);
        return possibleConstructorReturn(this, (MenuVertical.__proto__ || Object.getPrototypeOf(MenuVertical)).apply(this, arguments));
    }

    createClass(MenuVertical, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }]);
    return MenuVertical;
}(_MenuVerticalBase);
MenuVertical = __decorate([vueTyped.Component({
    template: '<div class="ui vertical menu"><slot></slot></div>'
})], MenuVertical);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _MenuHorizontalBase = function (_MenuBase) {
    inherits(_MenuHorizontalBase, _MenuBase);

    function _MenuHorizontalBase() {
        classCallCheck(this, _MenuHorizontalBase);
        return possibleConstructorReturn(this, (_MenuHorizontalBase.__proto__ || Object.getPrototypeOf(_MenuHorizontalBase)).apply(this, arguments));
    }

    return _MenuHorizontalBase;
}(MenuBase);

__decorate([vueTyped.Prop({
    type: Boolean
})], _MenuHorizontalBase.prototype, "secondary", void 0);

var MenuHorizontal = function (_MenuHorizontalBase2) {
    inherits(MenuHorizontal, _MenuHorizontalBase2);

    function MenuHorizontal() {
        classCallCheck(this, MenuHorizontal);
        return possibleConstructorReturn(this, (MenuHorizontal.__proto__ || Object.getPrototypeOf(MenuHorizontal)).apply(this, arguments));
    }

    createClass(MenuHorizontal, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }]);
    return MenuHorizontal;
}(_MenuHorizontalBase);
MenuHorizontal = __decorate([vueTyped.Component({
    template: '<div class="ui menu"><slot></slot></div>'
})], MenuHorizontal);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _MenuItemBase = function (_Virtual) {
    inherits(_MenuItemBase, _Virtual);

    function _MenuItemBase() {
        classCallCheck(this, _MenuItemBase);
        return possibleConstructorReturn(this, (_MenuItemBase.__proto__ || Object.getPrototypeOf(_MenuItemBase)).apply(this, arguments));
    }

    return _MenuItemBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _MenuItemBase.prototype, "icon", void 0);
__decorate([vueTyped.Prop()], _MenuItemBase.prototype, "to", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _MenuItemBase.prototype, "preventRouter", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _MenuItemBase.prototype, "content", void 0);

var MenuItem = function (_MenuItemBase2) {
    inherits(MenuItem, _MenuItemBase2);

    function MenuItem() {
        classCallCheck(this, MenuItem);
        return possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
    }

    createClass(MenuItem, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'render',
        value: function render(createElement) {
            var _this2 = this;

            var contents = [];
            if (this.icon) {
                var icons = this.icon;
                if (icons.split(' ').indexOf('icon') < 0) icons += ' icon';
                contents.push(createElement('i', {
                    'class': icons
                }));
            }
            contents.push(this.content || this.$slots['default']);
            var tag = 'a';
            var opts = {
                'class': 'item',
                on: {
                    'click': function click() {
                        _this2.$emit('click');
                    }
                }
            };
            // vue-router attrs
            if (this.to) {
                if (this.$router && !this.preventRouter) {
                    tag = 'router-link';
                    opts['props'] = {
                        to: this.to,
                        exact: true
                    };
                } else {
                    opts['href'] = this.to;
                }
            }
            var el = createElement(tag, opts, contents);
            return el;
        }
    }]);
    return MenuItem;
}(_MenuItemBase);
MenuItem = __decorate([vueTyped.Component()], MenuItem);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _MenuDropdownBase = function (_Virtual) {
    inherits(_MenuDropdownBase, _Virtual);

    function _MenuDropdownBase() {
        classCallCheck(this, _MenuDropdownBase);
        return possibleConstructorReturn(this, (_MenuDropdownBase.__proto__ || Object.getPrototypeOf(_MenuDropdownBase)).apply(this, arguments));
    }

    return _MenuDropdownBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _MenuDropdownBase.prototype, "label", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _MenuDropdownBase.prototype, "hover", void 0);
__decorate([vueTyped.Prop({
    type: String,
    default: 'dropdown'
})], _MenuDropdownBase.prototype, "icon", void 0);

var MenuDropdown = function (_MenuDropdownBase2) {
    inherits(MenuDropdown, _MenuDropdownBase2);

    function MenuDropdown() {
        classCallCheck(this, MenuDropdown);
        return possibleConstructorReturn(this, (MenuDropdown.__proto__ || Object.getPrototypeOf(MenuDropdown)).apply(this, arguments));
    }

    createClass(MenuDropdown, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var opt = {};
            if (this.hover) {
                opt.on = 'hover';
            }
            $(this.$el).dropdown(opt);
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).dropdown('destroy');
        }
    }]);
    return MenuDropdown;
}(_MenuDropdownBase);
MenuDropdown = __decorate([vueTyped.Component({
    template: '<div class="ui dropdown item">\n    {{label}}\n    <i :class="icon + \' icon\'"></i>\n    <div class="menu">\n\t\t\t<slot></slot>\n    </div>\n  </div>'
})], MenuDropdown);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _HeaderBase = function (_Virtual) {
  inherits(_HeaderBase, _Virtual);

  function _HeaderBase() {
    classCallCheck(this, _HeaderBase);
    return possibleConstructorReturn(this, (_HeaderBase.__proto__ || Object.getPrototypeOf(_HeaderBase)).apply(this, arguments));
  }

  return _HeaderBase;
}(vueTyped.Virtual());

var HeaderBase = function (_HeaderBase2) {
    inherits(HeaderBase, _HeaderBase2);

    function HeaderBase() {
        classCallCheck(this, HeaderBase);
        return possibleConstructorReturn(this, (HeaderBase.__proto__ || Object.getPrototypeOf(HeaderBase)).apply(this, arguments));
    }

    createClass(HeaderBase, [{
        key: 'preRender',
        value: function preRender(ch, tag, sub) {
            var css = sub ? 'sub' : 'ui';
            return ch(tag, {
                'class': css + ' header'
            }, this.$slots['default']);
        }
    }, {
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }]);
    return HeaderBase;
}(_HeaderBase);

var Header = function (_HeaderBase3) {
    inherits(Header, _HeaderBase3);

    function Header() {
        classCallCheck(this, Header);
        return possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    createClass(Header, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'div');
        }
    }]);
    return Header;
}(HeaderBase);
Header = __decorate([vueTyped.Options()], Header);
var SubHeader = function (_HeaderBase4) {
    inherits(SubHeader, _HeaderBase4);

    function SubHeader() {
        classCallCheck(this, SubHeader);
        return possibleConstructorReturn(this, (SubHeader.__proto__ || Object.getPrototypeOf(SubHeader)).apply(this, arguments));
    }

    createClass(SubHeader, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'div', true);
        }
    }]);
    return SubHeader;
}(HeaderBase);
SubHeader = __decorate([vueTyped.Options()], SubHeader);
var H1 = function (_HeaderBase5) {
    inherits(H1, _HeaderBase5);

    function H1() {
        classCallCheck(this, H1);
        return possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).apply(this, arguments));
    }

    createClass(H1, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'h1');
        }
    }]);
    return H1;
}(HeaderBase);
H1 = __decorate([vueTyped.Options()], H1);
var H2 = function (_HeaderBase6) {
    inherits(H2, _HeaderBase6);

    function H2() {
        classCallCheck(this, H2);
        return possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).apply(this, arguments));
    }

    createClass(H2, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'h2');
        }
    }]);
    return H2;
}(HeaderBase);
H2 = __decorate([vueTyped.Options()], H2);
var H3 = function (_HeaderBase7) {
    inherits(H3, _HeaderBase7);

    function H3() {
        classCallCheck(this, H3);
        return possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).apply(this, arguments));
    }

    createClass(H3, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'h3');
        }
    }]);
    return H3;
}(HeaderBase);
H3 = __decorate([vueTyped.Options()], H3);
var H4 = function (_HeaderBase8) {
    inherits(H4, _HeaderBase8);

    function H4() {
        classCallCheck(this, H4);
        return possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
    }

    createClass(H4, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'h4');
        }
    }]);
    return H4;
}(HeaderBase);
H4 = __decorate([vueTyped.Options()], H4);
var H5 = function (_HeaderBase9) {
    inherits(H5, _HeaderBase9);

    function H5() {
        classCallCheck(this, H5);
        return possibleConstructorReturn(this, (H5.__proto__ || Object.getPrototypeOf(H5)).apply(this, arguments));
    }

    createClass(H5, [{
        key: 'render',
        value: function render(ch) {
            return this.preRender(ch, 'h5');
        }
    }]);
    return H5;
}(HeaderBase);
H5 = __decorate([vueTyped.Options()], H5);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _MessageBase = function (_Virtual) {
    inherits(_MessageBase, _Virtual);

    function _MessageBase() {
        classCallCheck(this, _MessageBase);
        return possibleConstructorReturn(this, (_MessageBase.__proto__ || Object.getPrototypeOf(_MessageBase)).apply(this, arguments));
    }

    return _MessageBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: Boolean,
    default: false
})], _MessageBase.prototype, "closable", void 0);
__decorate([vueTyped.Prop({
    type: String,
    default: 'fade'
})], _MessageBase.prototype, "transition", void 0);
__decorate([vueTyped.Prop()], _MessageBase.prototype, "kind", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _MessageBase.prototype, "icon", void 0);

var Message = function (_MessageBase2) {
    inherits(Message, _MessageBase2);

    function Message() {
        classCallCheck(this, Message);
        return possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
    }

    createClass(Message, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var self = this;
            var target = this.target();
            if (this.icon) {
                target.addClass('icon');
            }
            if (this.kind && this.kind !== 'default') {
                target.addClass(this.kind);
            }
            if (this.closable) {
                target.find('.close.icon').on('click', function () {
                    $(this).closest('.message').transition(self.transition);
                });
            }
        }
    }]);
    return Message;
}(_MessageBase);
Message = __decorate([vueTyped.Options({
    template: '\n\t<div class="ui message">\n  \t<i v-if="closable" class="close icon"></i>\n\t\t<div v-if="$slots.header && !icon" class="header">\n  \t\t<slot name="header"></slot>\n\t\t</div>\n\t\t<p v-if="!icon"><slot></slot></p>\n\t\t<i v-if="icon" :class="icon + \' icon\'"></i>\n\t\t<div v-if="icon" class="content">\n\t\t\t<div v-if="$slots.header" class="header">\n    \t\t<slot name="header"></slot>\n\t\t\t</div>\n    \t<p><slot></slot></p>\n  \t</div>\n\t</div>\n\t'
})], Message);

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _ModalBase = function (_Virtual) {
    inherits(_ModalBase, _Virtual);

    function _ModalBase() {
        classCallCheck(this, _ModalBase);
        return possibleConstructorReturn(this, (_ModalBase.__proto__ || Object.getPrototypeOf(_ModalBase)).apply(this, arguments));
    }

    return _ModalBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop({
    type: String
})], _ModalBase.prototype, "attachShow", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _ModalBase.prototype, "attachHide", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _ModalBase.prototype, "attachToggle", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _ModalBase.prototype, "attachRefresh", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _ModalBase.prototype, "closable", void 0);
__decorate([vueTyped.Prop()], _ModalBase.prototype, "transition", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: false
})], _ModalBase.prototype, "allowMultiple", void 0);
__decorate([vueTyped.Prop({
    type: Boolean,
    default: false
})], _ModalBase.prototype, "autofocus", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _ModalBase.prototype, "icon", void 0);

var Modal = function (_ModalBase2) {
    inherits(Modal, _ModalBase2);

    function Modal() {
        classCallCheck(this, Modal);
        return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    createClass(Modal, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'show',
        value: function show() {
            return this.target().modal('show');
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this.target().modal('hide');
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            return this.target().modal('toggle');
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            return this.target().modal('refresh');
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var self = this;
            var emit = function emit(fn) {
                return function (sender) {
                    var e = { sender: sender, context: this, result: true };
                    self.$emit(fn, e);
                    return e.result;
                };
            };
            var target = this.target();
            target.modal({
                onDeny: emit('deny'),
                onApprove: emit('approve'),
                onShow: emit('show'),
                onHide: emit('hide'),
                onHidden: emit('hidden'),
                onVisible: emit('visible'),
                closable: this.closable,
                transition: this.transition,
                allowMultiple: this.allowMultiple,
                autofocus: this.autofocus
            });
            if (this.attachShow) target.modal('attach events', this.attachShow, 'show');
            if (this.attachHide) target.modal('attach events', this.attachHide, 'hide');
            if (this.attachToggle) target.modal('attach events', this.attachToggle, 'toggle');
            if (this.attachRefresh) target.modal('attach events', this.attachRefresh, 'refresh');
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            this.target().modal('destroy');
        }
    }, {
        key: 'hasActions',
        get: function get() {
            return this.$slots['actions'] != undefined;
        }
    }, {
        key: 'hasHeader',
        get: function get() {
            return this.$slots['header'] != undefined;
        }
    }, {
        key: 'headerCss',
        get: function get() {
            if (!this.hasHeader) return '';
            if (this.icon) return 'ui header icon';
            return 'header';
        }
    }]);
    return Modal;
}(_ModalBase);
Modal = __decorate([vueTyped.Component({
    template: '<div class="ui modal">\n  <i v-if="closable" class="close icon"></i>\n  <div :class="headerCss" v-if="hasHeader">\n\t\t<i :class="icon + \' icon\'" v-if="icon"></i>\n    <slot name="header"></slot>\n  </div>\n  <div class="content">\n    <slot></slot>\n  </div>\n  <div class="actions" v-if="hasActions">\n\t\t<slot name="actions"></slot>\n  </div>\n</div>'
})], Modal);

function FormComponent(options$$1) {
    if (!options$$1.template) throw 'Template should be defined when using FormComponent.';
    var args = [];
    if (options$$1.onSuccess !== undefined) {
        args.push({ key: 'v-on:success', val: options$$1.onSuccess });
        delete options$$1.onSuccess;
    }
    if (options$$1.onError !== undefined) {
        args.push({ key: 'v-on:error', val: options$$1.onError });
        delete options$$1.onError;
    }
    if (options$$1.validateInline !== undefined) {
        args.push({ key: ':validate-inline', val: options$$1.validateInline });
        delete options$$1.validateInline;
    }
    if (options$$1.class !== undefined) {
        args.push({ key: 'class', val: options$$1.class });
        delete options$$1.class;
    }
    var argsStr = ' ' + args.map(function (v) {
        return v.key + '="' + v.val + '"';
    }).join(' ');
    if (!options$$1.replace) {
        options$$1.template = '<ui-form :validator="' + ValidatorPropName + '"' + argsStr + '>' + options$$1.template + '</ui-form>';
    } else {
        var htmlToElement = function htmlToElement(html) {
            var template = document.createElement('template');
            template.innerHTML = html;
            return template.content.firstChild;
        };

        var node = htmlToElement(options$$1.template);
        var newNode = document.createElement('ui-form');
        var classes = [];
        for (var i = 0; i < node.attributes.length; i++) {
            var attr = node.attributes[i];
            if (attr.name == 'class') classes.push(attr.value);else newNode.setAttribute(attr.name, attr.value);
        }
        newNode.setAttribute(':validator', ValidatorPropName);
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (arg.key == 'class') classes.push(arg.val);else newNode.setAttribute(arg.key, arg.val);
        }
        if (classes.length) {
            newNode.setAttribute('class', classes.join(' '));
        }
        newNode.innerHTML = node['innerHTML'];
        options$$1.template = newNode.outerHTML;
    }
    return function (target) {
        var validators = target.prototype[ValidatorPropNameTmp] || undefined;
        delete target.prototype[ValidatorPropNameTmp];
        var vm = vueTyped.Component(options$$1)(target);
        Object.defineProperty(vm.prototype, ValidatorPropName, {
            value: validators
        });
        return vm;
    };
}

function Validate(options$$1) {
    return function (target, key) {
        if (!target[ValidatorPropNameTmp]) {
            target[ValidatorPropNameTmp] = {};
        }
        var validate = {
            identifier: key,
            rules: [options$$1]
        };
        if (target[ValidatorPropNameTmp][key]) {
            target[ValidatorPropNameTmp][key].rules.push(options$$1);
        } else {
            target[ValidatorPropNameTmp][key] = validate;
        }
    };
}

/**
 * Main VueTypedUI Plugin Class
 *
 * @class VueTypedUIOptions
 */

var VueTypedUI$1 = function () {
    function VueTypedUI(vue, options$$1) {
        classCallCheck(this, VueTypedUI);

        options$$1 = vue['util'].extend(DefaultOptions, options$$1 || {});
        var settings = options$$1.settings = vue['util'].extend(DefaultSettings, options$$1.settings || {});
        // set toastr default settings
        if (options$$1.settings.toastr) {
            _.each(options$$1.settings.toastr, function (v, k) {
                toastr.options[k] = v;
            });
        }
        var uiRoot = {
            $settings: settings
        };
        vue['util'].defineReactive(Vue.prototype, '$UI', uiRoot);
        VueTypedUI.prefix = options$$1.prefix;
        register_all_components(vue, options$$1.prefix);
        register_all_filters(vue, options$$1.prefix, uiRoot);
        register_all_methods(vue, this);
        Object.defineProperty(vue.prototype, '$ui', {
            get: function get() {
                return this._ui;
            }
        });
    }

    createClass(VueTypedUI, null, [{
        key: 'install',
        value: function install$1(vue, options$$1) {
            if (this.installed) return;
            var instance = new VueTypedUI(vue, options$$1);
        }
    }]);
    return VueTypedUI;
}();

var install$1 = VueTypedUI$1.install;

/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
var _TreeBase = function (_Virtual) {
    inherits(_TreeBase, _Virtual);

    function _TreeBase() {
        classCallCheck(this, _TreeBase);
        return possibleConstructorReturn(this, (_TreeBase.__proto__ || Object.getPrototypeOf(_TreeBase)).apply(this, arguments));
    }

    return _TreeBase;
}(vueTyped.Virtual());

__decorate([vueTyped.Prop()], _TreeBase.prototype, "model", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _TreeBase.prototype, "content", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _TreeBase.prototype, "html", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _TreeBase.prototype, "htmlContent", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _TreeBase.prototype, "children", void 0);
__decorate([vueTyped.Prop({
    type: String,
    default: 'ul'
})], _TreeBase.prototype, "parentTag", void 0);
__decorate([vueTyped.Prop({
    type: String,
    default: 'li'
})], _TreeBase.prototype, "childTag", void 0);

var Tree = function (_TreeBase2) {
    inherits(Tree, _TreeBase2);

    function Tree() {
        classCallCheck(this, Tree);
        return possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
    }

    createClass(Tree, [{
        key: 'target',
        value: function target() {
            return $(this.$el);
        }
    }, {
        key: 'render',
        value: function render(ch) {
            var self = this;
            var content_prop = this.content;
            var children_prop = this.children;
            var html_content = this.htmlContent;
            var is_html = this.html;
            function buildContent() {
                if (is_html) {
                    var html = self.htmlContent || self.model[content_prop];
                    var comp = Vue.compile(html);
                    return ch({
                        render: comp.render,
                        staticRenderFns: comp.staticRenderFns,
                        data: function data() {
                            return { model: self.model };
                        }
                    }, {
                        on: {
                            'node-click': function nodeClick(m) {
                                self.$emit('node-click', m);
                            }
                        }
                    });
                } else if (self.content) {
                    return self.model[content_prop];
                }
            }
            var children = [buildContent()];
            var events = this['_events'];
            if (this.model[this.children]) {
                children.push(ch(this.parentTag, this.model[this.children].map(function (c) {
                    return ch(VueTypedUI$1.prefix + '-tree', {
                        attrs: { model: c, content: content_prop, children: children_prop, html: is_html, htmlContent: html_content, parentTag: self.parentTag, childTag: self.childTag },
                        on: events
                    });
                })));
            }
            return ch(this.childTag, {
                on: {
                    click: function click(e) {
                        if (e.target == e.currentTarget) {
                            self.$emit('node-click', self.model);
                        }
                    }
                }
            }, children);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            if (this.$el.parentElement.tagName !== this.parentTag.toUpperCase()) {
                $(this.$el).wrap('<' + this.parentTag + '/>');
            }
        }
    }]);
    return Tree;
}(_TreeBase);
Tree = __decorate([vueTyped.Options()], Tree);



var components = Object.freeze({
	get Form () { return Form; },
	get Input () { return Input; },
	get Date () { return Date; },
	get Time () { return Time; },
	get DateTime () { return DateTime; },
	get Numeric () { return Numeric; },
	get Currency () { return Currency; },
	get Radio () { return Radio; },
	get RadioGroup () { return RadioGroup; },
	get Checkbox () { return Checkbox; },
	get Dropdown () { return Dropdown; },
	get DropdownItem () { return DropdownItem; },
	get Button () { return Button; },
	get Field () { return Field; },
	get FieldsInline () { return FieldsInline; },
	get FieldsGroup () { return FieldsGroup; },
	get Tab () { return Tab; },
	get TabItem () { return TabItem; },
	get Pusher () { return Pusher; },
	get Segment () { return Segment; },
	get Accordion () { return Accordion; },
	get AccordionItem () { return AccordionItem; },
	get MenuVertical () { return MenuVertical; },
	get MenuHorizontal () { return MenuHorizontal; },
	get MenuItem () { return MenuItem; },
	get MenuDropdown () { return MenuDropdown; },
	get Header () { return Header; },
	get SubHeader () { return SubHeader; },
	get H1 () { return H1; },
	get H2 () { return H2; },
	get H3 () { return H3; },
	get H4 () { return H4; },
	get H5 () { return H5; },
	get Message () { return Message; },
	get Modal () { return Modal; },
	get Tree () { return Tree; }
});

__$styleInject("html.swal2-shown {\n  overflow-y: hidden; }\n\nbody.swal2-shown {\n  overflow-y: hidden; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-modal {\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative; }\n  .swal2-modal:focus {\n    outline: none; }\n  .swal2-modal.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-modal .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block; }\n  .swal2-modal .swal2-spacer {\n    height: 10px;\n    color: transparent;\n    border: 0; }\n  .swal2-modal .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 0 5px;\n    padding: 10px 32px; }\n    .swal2-modal .swal2-styled:not(.swal2-loading)[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-modal .swal2-styled .swal2-styled + .swal2-styled {\n      margin-top: 15px; }\n    .swal2-modal .swal2-styled.swal2-loading {\n      box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: -2px 30px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  .swal2-modal :not(.swal2-styled).swal2-loading::after {\n    display: inline-block;\n    content: '';\n    margin-left: 5px;\n    vertical-align: -1px;\n    height: 6px;\n    width: 6px;\n    border: 3px solid #999999;\n    border-right-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n            animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-modal .swal2-close {\n    font-size: 36px;\n    line-height: 36px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 13px;\n    cursor: pointer;\n    color: #cccccc;\n    -webkit-transition: color .1s ease;\n    transition: color .1s ease; }\n    .swal2-modal .swal2-close:hover {\n      color: #d55; }\n  .swal2-modal > .swal2-input,\n  .swal2-modal > .swal2-file,\n  .swal2-modal > .swal2-textarea,\n  .swal2-modal > .swal2-select,\n  .swal2-modal > .swal2-radio,\n  .swal2-modal > .swal2-checkbox {\n    display: none; }\n  .swal2-modal .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea,\n  .swal2-modal .swal2-select,\n  .swal2-modal .swal2-radio,\n  .swal2-modal .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    font-size: 18px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-transition: border-color box-shadow .3s;\n    transition: border-color box-shadow .3s; }\n    .swal2-modal .swal2-input.swal2-inputerror,\n    .swal2-modal .swal2-file.swal2-inputerror,\n    .swal2-modal .swal2-textarea.swal2-inputerror {\n      border-color: #f06e57 !important; }\n    .swal2-modal .swal2-input:focus,\n    .swal2-modal .swal2-file:focus,\n    .swal2-modal .swal2-textarea:focus {\n      outline: none;\n      box-shadow: 0 0 3px #c4e6f5;\n      border: 1px solid #b4dbed; }\n      .swal2-modal .swal2-input:focus::-webkit-input-placeholder,\n      .swal2-modal .swal2-file:focus::-webkit-input-placeholder,\n      .swal2-modal .swal2-textarea:focus::-webkit-input-placeholder {\n        -webkit-transition: opacity .3s .03s ease;\n        transition: opacity .3s .03s ease;\n        opacity: .8; }\n      .swal2-modal .swal2-input:focus::-moz-placeholder,\n      .swal2-modal .swal2-file:focus::-moz-placeholder,\n      .swal2-modal .swal2-textarea:focus::-moz-placeholder {\n        -webkit-transition: opacity .3s .03s ease;\n        transition: opacity .3s .03s ease;\n        opacity: .8; }\n      .swal2-modal .swal2-input:focus:-ms-input-placeholder,\n      .swal2-modal .swal2-file:focus:-ms-input-placeholder,\n      .swal2-modal .swal2-textarea:focus:-ms-input-placeholder {\n        -webkit-transition: opacity .3s .03s ease;\n        transition: opacity .3s .03s ease;\n        opacity: .8; }\n      .swal2-modal .swal2-input:focus::placeholder,\n      .swal2-modal .swal2-file:focus::placeholder,\n      .swal2-modal .swal2-textarea:focus::placeholder {\n        -webkit-transition: opacity .3s .03s ease;\n        transition: opacity .3s .03s ease;\n        opacity: .8; }\n    .swal2-modal .swal2-input::-webkit-input-placeholder,\n    .swal2-modal .swal2-file::-webkit-input-placeholder,\n    .swal2-modal .swal2-textarea::-webkit-input-placeholder {\n      color: #e6e6e6; }\n    .swal2-modal .swal2-input::-moz-placeholder,\n    .swal2-modal .swal2-file::-moz-placeholder,\n    .swal2-modal .swal2-textarea::-moz-placeholder {\n      color: #e6e6e6; }\n    .swal2-modal .swal2-input:-ms-input-placeholder,\n    .swal2-modal .swal2-file:-ms-input-placeholder,\n    .swal2-modal .swal2-textarea:-ms-input-placeholder {\n      color: #e6e6e6; }\n    .swal2-modal .swal2-input::placeholder,\n    .swal2-modal .swal2-file::placeholder,\n    .swal2-modal .swal2-textarea::placeholder {\n      color: #e6e6e6; }\n  .swal2-modal .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-modal .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-modal .swal2-range input,\n  .swal2-modal .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-modal .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-modal .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-modal .swal2-file {\n    font-size: 20px; }\n  .swal2-modal .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-modal .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-modal .swal2-radio {\n    border: 0; }\n    .swal2-modal .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-modal .swal2-radio input,\n    .swal2-modal .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-modal .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-modal .swal2-checkbox {\n    color: #545454; }\n    .swal2-modal .swal2-checkbox input,\n    .swal2-modal .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-modal .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-modal .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  box-sizing: content-box;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error .line {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error .line.left {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error .line.right {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success::before, .swal2-icon.swal2-success::after {\n      content: '';\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      background: #fff;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n    .swal2-icon.swal2-success::before {\n      border-radius: 120px 0 0 120px;\n      top: -7px;\n      left: -33px;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      -webkit-transform-origin: 60px 60px;\n              transform-origin: 60px 60px; }\n    .swal2-icon.swal2-success::after {\n      border-radius: 0 120px 120px 0;\n      top: -11px;\n      left: 30px;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      -webkit-transform-origin: 0 60px;\n              transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .placeholder {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .fix {\n      width: 7px;\n      height: 90px;\n      background-color: #fff;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .swal2-icon.swal2-success .line {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success .line.tip {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success .line.long {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  -webkit-animation: showSweetAlert 0.3s;\n          animation: showSweetAlert 0.3s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: hideSweetAlert 0.15s forwards;\n          animation: hideSweetAlert 0.15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n@-webkit-keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n.animate-success-tip {\n  -webkit-animation: animate-success-tip 0.75s;\n          animation: animate-success-tip 0.75s; }\n\n.animate-success-long {\n  -webkit-animation: animate-success-long 0.75s;\n          animation: animate-success-long 0.75s; }\n\n.swal2-success.animate::after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n.animate-error-icon {\n  -webkit-animation: animate-error-icon 0.5s;\n          animation: animate-error-icon 0.5s; }\n\n@-webkit-keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.animate-x-mark {\n  -webkit-animation: animate-x-mark 0.5s;\n          animation: animate-x-mark 0.5s; }\n\n@-webkit-keyframes pulse-warning {\n  0% {\n    border-color: #f8d486; }\n  100% {\n    border-color: #f8bb86; } }\n\n@keyframes pulse-warning {\n  0% {\n    border-color: #f8d486; }\n  100% {\n    border-color: #f8bb86; } }\n\n.pulse-warning {\n  -webkit-animation: pulse-warning 0.75s infinite alternate;\n          animation: pulse-warning 0.75s infinite alternate; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", undefined);

function alert(instance, $this) {
    return function (options$$1) {
        return swal.apply(this, arguments);
    };
}

__$styleInject(".toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  -ms-word-wrap: break-word;\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #ffffff;\n}\n.toast-message a:hover {\n  color: #cccccc;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #ffffff;\n  -webkit-text-shadow: 0 1px 0 #ffffff;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80);\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40);\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n#toast-container {\n  position: fixed;\n  z-index: 999999;\n  pointer-events: none;\n  /*overrides*/\n}\n#toast-container * {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n#toast-container > div {\n  position: relative;\n  pointer-events: auto;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  -moz-border-radius: 3px 3px 3px 3px;\n  -webkit-border-radius: 3px 3px 3px 3px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  -moz-box-shadow: 0 0 12px #999999;\n  -webkit-box-shadow: 0 0 12px #999999;\n  box-shadow: 0 0 12px #999999;\n  color: #ffffff;\n  opacity: 0.8;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  filter: alpha(opacity=80);\n}\n#toast-container > :hover {\n  -moz-box-shadow: 0 0 12px #000000;\n  -webkit-box-shadow: 0 0 12px #000000;\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  filter: alpha(opacity=100);\n  cursor: pointer;\n}\n#toast-container > .toast-info {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important;\n}\n#toast-container > .toast-error {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important;\n}\n#toast-container > .toast-success {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important;\n}\n#toast-container > .toast-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important;\n}\n#toast-container.toast-top-center > div,\n#toast-container.toast-bottom-center > div {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#toast-container.toast-top-full-width > div,\n#toast-container.toast-bottom-full-width > div {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast {\n  background-color: #030303;\n}\n.toast-success {\n  background-color: #51a351;\n}\n.toast-error {\n  background-color: #bd362f;\n}\n.toast-info {\n  background-color: #2f96b4;\n}\n.toast-warning {\n  background-color: #f89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n  filter: alpha(opacity=40);\n}\n/*Responsive Design*/\n@media all and (max-width: 240px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  #toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  #toast-container > div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n", undefined);

function toast(instance, $this) {
    return toastr;
}

function focus(instance, $this) {
    return function focus(element) {
        var target = $($this.$el).find(element);
        if (!target || !target.length) return;
        if (!target.is('input')) {
            target = target.find('input').first();
        }
        target.focus();
    };
}

function loading$1(instance, $this) {
    return function loading$1(element) {
        var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var target = $($this.$el).find(element);
        if (!target || !target.length) return;
        var module = {
            start: function start() {
                target.addClass('loading');
            },
            stop: function stop() {
                target.removeClass('loading');
            }
        };
        if (auto) module.start();
        return module;
    };
}



var modules = Object.freeze({
	alert: alert,
	toast: toast,
	focus: focus,
	loading: loading$1
});

function DateTime$1(instance) {
    return function (value) {
        if (!value) return null;
        return moment(value).format(instance.$settings.dateFormat + ' ' + instance.$settings.timeFormat);
    };
}

function Date$1(instance) {
    return function (value) {
        if (!value) return null;
        return moment(value).format(instance.$settings.dateFormat);
    };
}

function Time$1(instance) {
    return function (value) {
        if (!value) return null;
        return moment(value).format(instance.$settings.timeFormat);
    };
}

function Numeric$1(instance) {
    return function (value) {
        var settings = instance.$settings.numeric;
        var str = Util.numberFormat(value, settings.decimalPlaces, settings.decimalSeparator, settings.groupSeparator);
        return str;
    };
}

function Currency$1(instance) {
    return function (value) {
        var settings = instance.$settings.numeric;
        var str = Util.numberFormat(value, settings.decimalPlaces, settings.decimalSeparator, settings.groupSeparator);
        if (settings.sign) {
            var prop = Util.decodeCurrencyProperties(settings.sign, settings.signPos);
            if (prop.pSign === 's') return str + prop.aSign;
            return prop.aSign + str;
        }
        return str;
    };
}

function Int(instance) {
    return function (value) {
        var settings = instance.$settings.numeric;
        var str = Util.numberFormat(Math.round(value), 0, settings.decimalSeparator, settings.groupSeparator);
        return str;
    };
}



var filters = Object.freeze({
	DateTime: DateTime$1,
	Date: Date$1,
	Time: Time$1,
	Numeric: Numeric$1,
	Currency: Currency$1,
	Int: Int
});

var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = function hyphenate(str) {
    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};
function register_all_components(vue, prefix) {
    for (var k in components) {
        var opt = components[k];
        if (typeof opt === 'function') opt = opt.options;
        // clear components so it will have new names
        delete opt.components;
        opt.name = prefix + '-' + hyphenate(k);
        vue.component(opt.name, vue.extend(opt));
    }
}
function register_all_methods(vue, instance) {
    var global_methods = {
        'createValidationRule': function createValidationRule(name, rule) {
            $.fn.form.settings.rules[name] = rule;
        },
        'showModal': function showModal(element) {
            $(element).modal('show');
        }
    };
    instance = _.merge(instance, global_methods);
    vue.mixin({
        beforeCreate: function beforeCreate() {
            var _this = this;

            var mdls = {};
            for (var k in modules) {
                mdls[k] = modules[k](instance, this);
            }
            for (var k in components) {
                mdls[_.camelCase(k)] = function (ref) {
                    if (typeof ref !== 'string') throw new Error('ref must be string represents the ref name of component');
                    var component = _this.$refs[ref];
                    if (!component) throw new Error('Could not resolve ui component in \'' + _this.$options.name + '\' referenced by \'' + ref + '\'.');
                    return component;
                };
            }
            mdls = _.merge(mdls, instance);
            Vue['util'].defineReactive(this, '_ui', mdls);
        }
    });
}
function register_all_filters(vue, prefix, instance) {
    for (var k in filters) {
        vue.filter(prefix + '-' + hyphenate(k), filters[k](instance));
    }
}

/**
 * Main VueTypedUI Plugin Class
 *
 * @class VueTypedUIOptions
 */

var VueTypedUI = function () {
    function VueTypedUI(vue, options$$1) {
        classCallCheck(this, VueTypedUI);

        options$$1 = vue['util'].extend(DefaultOptions, options$$1 || {});
        var settings = options$$1.settings = vue['util'].extend(DefaultSettings, options$$1.settings || {});
        // set toastr default settings
        if (options$$1.settings.toastr) {
            _.each(options$$1.settings.toastr, function (v, k) {
                toastr.options[k] = v;
            });
        }
        var uiRoot = {
            $settings: settings
        };
        vue['util'].defineReactive(Vue.prototype, '$UI', uiRoot);
        VueTypedUI.prefix = options$$1.prefix;
        register_all_components(vue, options$$1.prefix);
        register_all_filters(vue, options$$1.prefix, uiRoot);
        register_all_methods(vue, this);
        Object.defineProperty(vue.prototype, '$ui', {
            get: function get() {
                return this._ui;
            }
        });
    }

    createClass(VueTypedUI, null, [{
        key: 'install',
        value: function install(vue, options$$1) {
            if (this.installed) return;
            var instance = new VueTypedUI(vue, options$$1);
        }
    }]);
    return VueTypedUI;
}();

var install = VueTypedUI.install;

exports.VueTypedUI = VueTypedUI;
exports.install = install;
exports.FormComponent = FormComponent;
exports.Validate = Validate;

Object.defineProperty(exports, '__esModule', { value: true });

})));
