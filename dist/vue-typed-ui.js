/**
  * vue-typed-ui 1.3.0
  * UI components made with Semantic UI, VueTyped and friends
  * https://github.com/vue-typed/vue-typed-ui
  
  * Copyright 2016, Budi Adiono <budiadiono@gmail.com>
  * Released under the MIT license.
  '*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('toastr'), require('lodash'), require('vue-typed'), require('moment'), require('sweetalert')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vue', 'toastr', 'lodash', 'vue-typed', 'moment', 'sweetalert'], factory) :
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

var _FormBase = function (_Vue) {
    inherits(_FormBase, _Vue);

    function _FormBase() {
        classCallCheck(this, _FormBase);

        /**
         * Adds keyboard shortcut for enter key to submit form
         *
         * @default true
         * @type {boolean}
         */
        var _this = possibleConstructorReturn(this, (_FormBase.__proto__ || Object.getPrototypeOf(_FormBase)).apply(this, arguments));

        _this.keyboardShortcuts = true;
        return _this;
    }

    return _FormBase;
}(Vue);

__decorate([vueTyped.Prop()], _FormBase.prototype, "validator", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _FormBase.prototype, "validateInline", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _FormBase.prototype, "labelWidth", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _FormBase.prototype, "keyboardShortcuts", void 0);

var Form = function (_FormBase2) {
    inherits(Form, _FormBase2);

    function Form() {
        classCallCheck(this, Form);
        return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    createClass(Form, [{
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
                keyboardShortcuts: false
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
Form = __decorate([vueTyped.Component()], Form);

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
         * Get expression/value/name given in [dataName] property
         *
         * @static
         * @param {any} component
         * @param {any} dataName
         * @returns
         *
         * @memberOf Util
         */

    }, {
        key: 'getExpressionData',
        value: function getExpressionData(component, dataName) {
            var id = undefined;
            var directives = component.$vnode.data.directives;
            for (var i = 0; i < directives.length; i++) {
                var d = directives[i];
                if (d.name === dataName) {
                    id = d.expression;
                    break;
                }
            }
            return id;
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
            var id = Util.getExpressionData(component, 'model');
            if (id) {
                element.attr(DataValidateAttr, id);
            }
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

var _FieldBaseBase = function (_Vue) {
    inherits(_FieldBaseBase, _Vue);

    function _FieldBaseBase() {
        classCallCheck(this, _FieldBaseBase);
        return possibleConstructorReturn(this, (_FieldBaseBase.__proto__ || Object.getPrototypeOf(_FieldBaseBase)).apply(this, arguments));
    }

    return _FieldBaseBase;
}(Vue);

__decorate([vueTyped.Prop({
    type: String
})], _FieldBaseBase.prototype, "label", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _FieldBaseBase.prototype, "wide", void 0);
__decorate([vueTyped.Prop()], _FieldBaseBase.prototype, "kind", void 0);

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
            var el = ch('div', {
                'class': Util.buildClassObject(style, Util.parseWide(this.wide))
            }, contents);
            return this.postRender(ch, el);
        }
    }, {
        key: 'postRender',
        value: function postRender(ch, el) {
            return el;
        }
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
FieldBase = __decorate([vueTyped.Component()], FieldBase);

var _InputBase = function (_FieldBase) {
    inherits(_InputBase, _FieldBase);

    function _InputBase() {
        classCallCheck(this, _InputBase);

        /**
         * Icon position
         *
         * @default 'left'
         * @type {'left' | 'right' | string}
         */
        var _this = possibleConstructorReturn(this, (_InputBase.__proto__ || Object.getPrototypeOf(_InputBase)).apply(this, arguments));

        _this.iconPos = 'left';
        return _this;
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
__decorate([vueTyped.Prop()], _InputBase.prototype, "iconPos", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _InputBase.prototype, "css", void 0);

// ref: http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events
var Input = function (_InputBase2) {
    inherits(Input, _InputBase2);

    function Input() {
        classCallCheck(this, Input);
        return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    createClass(Input, [{
        key: 'valueChanged',
        value: function valueChanged(val) {
            if (this.$el.querySelector('input') == document.activeElement) return;
            $(this.$el).find('input').val(val);
        }
    }, {
        key: 'createComponent',
        value: function createComponent(ch) {
            var input = ch('input', {
                class: this.css,
                attrs: {
                    type: this.password ? 'password' : 'text',
                    name: this.name,
                    placeholder: this.placeholder
                },
                on: {
                    input: this.emiter('input'),
                    change: this.emiter('change')
                }
            });
            if (!this.icon) return input;
            var icon = ch('i', {
                class: 'icon ' + this.icon
            });
            var contents = [];
            var css = 'ui left icon input';
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
            // make up for validation
            Util.setDataValidateAttr(this, target);
        }
    }]);
    return Input;
}(_InputBase);
__decorate([vueTyped.Watch('value')], Input.prototype, "valueChanged", null);
Input = __decorate([vueTyped.Component()], Input);

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
Calendar = __decorate([vueTyped.Component()], Calendar);

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
Date = __decorate([vueTyped.Component()], Date);

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
Time = __decorate([vueTyped.Component()], Time);

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
DateTime = __decorate([vueTyped.Component()], DateTime);

var _NumericBase = function (_FieldBase) {
    inherits(_NumericBase, _FieldBase);

    function _NumericBase() {
        classCallCheck(this, _NumericBase);

        /**
         * Take only integer value
         *
         * @default false
         * @type {boolean}
         */
        var _this = possibleConstructorReturn(this, (_NumericBase.__proto__ || Object.getPrototypeOf(_NumericBase)).apply(this, arguments));

        _this.integer = false;
        return _this;
    }

    return _NumericBase;
}(FieldBase);

__decorate([vueTyped.Prop({
    type: String
})], _NumericBase.prototype, "name", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _NumericBase.prototype, "placeholder", void 0);
__decorate([vueTyped.Prop()], _NumericBase.prototype, "value", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _NumericBase.prototype, "groupSeparator", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _NumericBase.prototype, "decimalSeparator", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _NumericBase.prototype, "decimalPlaces", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _NumericBase.prototype, "min", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _NumericBase.prototype, "max", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _NumericBase.prototype, "integer", void 0);

// ref: http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events
// ref: https://github.com/BobKnothe/autoNumeric
require('autonumeric');
var Numeric = function (_NumericBase2) {
    inherits(Numeric, _NumericBase2);

    function Numeric() {
        classCallCheck(this, Numeric);
        return possibleConstructorReturn(this, (Numeric.__proto__ || Object.getPrototypeOf(Numeric)).apply(this, arguments));
    }

    createClass(Numeric, [{
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
            Util.setDataValidateAttr(this, target);
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options$$1) {
            return options$$1;
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).find('input').autoNumeric('destroy');
        }
    }]);
    return Numeric;
}(_NumericBase);
__decorate([vueTyped.Watch('value')], Numeric.prototype, "valueChanged", null);
__decorate([vueTyped.Watch('$UI.$settings.numeric', true)], Numeric.prototype, "onSettingsChanged", null);
Numeric = __decorate([vueTyped.Component()], Numeric);

var _CurrencyBase = function (_Numeric) {
    inherits(_CurrencyBase, _Numeric);

    function _CurrencyBase() {
        classCallCheck(this, _CurrencyBase);
        return possibleConstructorReturn(this, (_CurrencyBase.__proto__ || Object.getPrototypeOf(_CurrencyBase)).apply(this, arguments));
    }

    return _CurrencyBase;
}(Numeric);

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
Currency = __decorate([vueTyped.Component()], Currency);

var _RadioBase = function (_Vue) {
    inherits(_RadioBase, _Vue);

    function _RadioBase() {
        classCallCheck(this, _RadioBase);
        return possibleConstructorReturn(this, (_RadioBase.__proto__ || Object.getPrototypeOf(_RadioBase)).apply(this, arguments));
    }

    return _RadioBase;
}(Vue);

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
                $(_this2.$el).find('.ui.radio').checkbox();
            });
        }
    }]);
    return Radio;
}(_RadioBase);
Radio = __decorate([vueTyped.Component({
    template: '\n\t<div class="field">\n\t\t<div class="ui radio checkbox">\n\t\t\t<input type="radio" class="hidden" :checked="value==val">\n\t\t\t<label><slot></slot></label>\n\t\t</div>\n\t</div>\n\t'
})], Radio);

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
        key: 'createComponent',
        value: function createComponent(ch) {
            this.groupName = this.name || 'radio-group-' + this['_uid'];
            return null;
        }
    }]);
    return RadioGroup;
}(_RadioGroupBase);
RadioGroup = __decorate([vueTyped.Component({
    template: '\n\t<div class="ui radio checkbox">\n\t\t<input type="radio" class="hidden" :checked="value==val">\n\t\t<label><slot></slot></label>\n\t</div>\n\t'
})], RadioGroup);

var _CheckboxBase = function (_Vue) {
    inherits(_CheckboxBase, _Vue);

    function _CheckboxBase() {
        classCallCheck(this, _CheckboxBase);
        return possibleConstructorReturn(this, (_CheckboxBase.__proto__ || Object.getPrototypeOf(_CheckboxBase)).apply(this, arguments));
    }

    return _CheckboxBase;
}(Vue);

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
            return $(this.$el).find('.ui.checkbox').checkbox(arg1, arg2);
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
    type: String
})], _DropdownBase.prototype, "css", void 0);

var Dropdown = function (_DropdownBase2) {
    inherits(Dropdown, _DropdownBase2);

    function Dropdown() {
        classCallCheck(this, Dropdown);

        var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));

        _this.selectedItems = undefined;
        return _this;
    }

    createClass(Dropdown, [{
        key: 'createComponent',
        value: function createComponent(ch) {
            var css = 'ui selection dropdown ' + this.css;
            return ch('div', { 'class': css }, [ch('input', { attrs: { type: 'hidden', name: this.name } }), ch('i', { 'class': 'dropdown icon' }), ch('div', { 'class': 'default text' }, this.placeholder), ch('div', { 'class': 'menu' }, this.$slots['default'])]);
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var self = this;
            var el = this.$el.querySelector('.ui.dropdown');
            // search ?
            if (this.search === true) {
                $(el).addClass('search');
            }
            // multiple ?
            if (this.multiple === true) {
                $(el).addClass('multiple');
                this.selectedItems = [];
                if (this.value) {
                    if (typeof this.value.length === "undefined") throw "v-model must be array for dropdown with multiple option!";
                } else {
                    this.selectedItems = [];
                }
            } else {
                this.selectedItems = this.value;
            }
            // init semantic-ui dropdown
            this.sui({
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
            });
            // make up data validate attr
            Util.setDataValidateAttr(this, $(this.$el).find('input'));
            // assign selected values
            this.valueChanged(this.value);
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(val) {
            if (this.multiple === true && this.selectedItems.toString() != val.toString()) {
                this.sui('set exactly', val);
            } else this.sui('set selected', val);
        }
    }, {
        key: 'sui',
        value: function sui(arg1, arg2) {
            return $(this.$el.querySelector('.ui.dropdown')).dropdown(arg1, arg2);
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el.querySelector('.ui.dropdown')).dropdown('destroy');
        }
    }]);
    return Dropdown;
}(_DropdownBase);
__decorate([vueTyped.Watch('value')], Dropdown.prototype, "valueChanged", null);
Dropdown = __decorate([vueTyped.Component()], Dropdown);

var _DropdownItemBase = function (_Vue) {
    inherits(_DropdownItemBase, _Vue);

    function _DropdownItemBase() {
        classCallCheck(this, _DropdownItemBase);
        return possibleConstructorReturn(this, (_DropdownItemBase.__proto__ || Object.getPrototypeOf(_DropdownItemBase)).apply(this, arguments));
    }

    return _DropdownItemBase;
}(Vue);

__decorate([vueTyped.Prop()], _DropdownItemBase.prototype, "value", void 0);

var DropdownItem = function (_DropdownItemBase2) {
    inherits(DropdownItem, _DropdownItemBase2);

    function DropdownItem() {
        classCallCheck(this, DropdownItem);
        return possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
    }

    return DropdownItem;
}(_DropdownItemBase);
DropdownItem = __decorate([vueTyped.Component({
    template: '<div class="item" :data-value="value"><slot></slot></div>'
})], DropdownItem);

var _ButtonBase = function (_Vue) {
    inherits(_ButtonBase, _Vue);

    function _ButtonBase() {
        classCallCheck(this, _ButtonBase);
        return possibleConstructorReturn(this, (_ButtonBase.__proto__ || Object.getPrototypeOf(_ButtonBase)).apply(this, arguments));
    }

    return _ButtonBase;
}(Vue);

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

var Button = function (_ButtonBase2) {
    inherits(Button, _ButtonBase2);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
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
                if (this.iconPos === 'right') $(this.$el).addClass('icon').append(' ').append(iconEl);else $(this.$el).addClass('icon').prepend(' ').prepend(iconEl);
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
            if (disabled) {
                $(this.$el).addClass('disabled');
            } else {
                $(this.$el).removeClass('disabled');
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
Button = __decorate([vueTyped.Component({})], Button);

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
        key: 'createComponent',
        value: function createComponent(ch) {
            return null;
        }
    }]);
    return Field;
}(_FieldBase);
Field = __decorate([vueTyped.Component()], Field);

var _FieldsInlineBase = function (_Vue) {
    inherits(_FieldsInlineBase, _Vue);

    function _FieldsInlineBase() {
        classCallCheck(this, _FieldsInlineBase);
        return possibleConstructorReturn(this, (_FieldsInlineBase.__proto__ || Object.getPrototypeOf(_FieldsInlineBase)).apply(this, arguments));
    }

    return _FieldsInlineBase;
}(Vue);

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
FieldsInline = __decorate([vueTyped.Component()], FieldsInline);

var _FieldsGroupBase = function (_Vue) {
    inherits(_FieldsGroupBase, _Vue);

    function _FieldsGroupBase() {
        classCallCheck(this, _FieldsGroupBase);
        return possibleConstructorReturn(this, (_FieldsGroupBase.__proto__ || Object.getPrototypeOf(_FieldsGroupBase)).apply(this, arguments));
    }

    return _FieldsGroupBase;
}(Vue);

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
FieldsGroup = __decorate([vueTyped.Component()], FieldsGroup);

var _TabBase = function (_Vue) {
    inherits(_TabBase, _Vue);

    function _TabBase() {
        classCallCheck(this, _TabBase);
        return possibleConstructorReturn(this, (_TabBase.__proto__ || Object.getPrototypeOf(_TabBase)).apply(this, arguments));
    }

    return _TabBase;
}(Vue);

__decorate([vueTyped.Prop()], _TabBase.prototype, "kind", void 0);

var Tab = function (_TabBase2) {
    inherits(Tab, _TabBase2);

    function Tab() {
        classCallCheck(this, Tab);

        var _this = possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));

        _this.items = [];
        return _this;
    }

    createClass(Tab, [{
        key: 'created',
        value: function created() {
            this.activeTab = this._tabName(1);
            this.items = [];
            this.updateStyle();
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var _this2 = this;

            Vue.nextTick(function () {
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
            var tabName = this._tabName(this.items.length);
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
            $(this.$el).find('.menu .item').tab('destroy');
        }
    }]);
    return Tab;
}(_TabBase);
__decorate([vueTyped.Watch('kind')], Tab.prototype, "onStyleChanged", null);
Tab = __decorate([vueTyped.Component({
    template: '<div>\n\t\t<div :class="css">\n\t\t\t<a v-for="i in items" class="item" v-bind:data-tab="i.dataTab">\n  \t\t\t{{i.caption}}\n\t\t\t</a>\n\t\t</div>\n\t\t<slot></slot>\n\t</div>'
})], Tab);

var _TabItemBase = function (_Vue) {
    inherits(_TabItemBase, _Vue);

    function _TabItemBase() {
        classCallCheck(this, _TabItemBase);
        return possibleConstructorReturn(this, (_TabItemBase.__proto__ || Object.getPrototypeOf(_TabItemBase)).apply(this, arguments));
    }

    return _TabItemBase;
}(Vue);

__decorate([vueTyped.Prop({
    type: String
})], _TabItemBase.prototype, "caption", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _TabItemBase.prototype, "active", void 0);

var TabItem = function (_TabItemBase2) {
    inherits(TabItem, _TabItemBase2);

    function TabItem() {
        classCallCheck(this, TabItem);

        var _this = possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));

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
TabItem = __decorate([vueTyped.Component({
    template: '<div :class="css" v-bind:data-tab="dataTab"><slot></slot></div>'
})], TabItem);

var _PusherBase = function (_Vue) {
  inherits(_PusherBase, _Vue);

  function _PusherBase() {
    classCallCheck(this, _PusherBase);
    return possibleConstructorReturn(this, (_PusherBase.__proto__ || Object.getPrototypeOf(_PusherBase)).apply(this, arguments));
  }

  return _PusherBase;
}(Vue);

var Pusher = function (_PusherBase2) {
    inherits(Pusher, _PusherBase2);

    function Pusher() {
        classCallCheck(this, Pusher);
        return possibleConstructorReturn(this, (Pusher.__proto__ || Object.getPrototypeOf(Pusher)).apply(this, arguments));
    }

    return Pusher;
}(_PusherBase);
Pusher = __decorate([vueTyped.Component({
    template: '<div class="pusher"><slot></slot></div>'
})], Pusher);

var _SegmentBase = function (_Vue) {
  inherits(_SegmentBase, _Vue);

  function _SegmentBase() {
    classCallCheck(this, _SegmentBase);
    return possibleConstructorReturn(this, (_SegmentBase.__proto__ || Object.getPrototypeOf(_SegmentBase)).apply(this, arguments));
  }

  return _SegmentBase;
}(Vue);

var Segment = function (_SegmentBase2) {
    inherits(Segment, _SegmentBase2);

    function Segment() {
        classCallCheck(this, Segment);
        return possibleConstructorReturn(this, (Segment.__proto__ || Object.getPrototypeOf(Segment)).apply(this, arguments));
    }

    return Segment;
}(_SegmentBase);
Segment = __decorate([vueTyped.Component({
    template: '<div class="ui segment"><slot></slot></div>'
})], Segment);

var _AccordionBase = function (_Vue) {
    inherits(_AccordionBase, _Vue);

    function _AccordionBase() {
        classCallCheck(this, _AccordionBase);

        /**
         * Only allow one section open at a time
         *
         * @default true
         * @type {boolean}
         */
        var _this = possibleConstructorReturn(this, (_AccordionBase.__proto__ || Object.getPrototypeOf(_AccordionBase)).apply(this, arguments));

        _this.exclusive = true;
        /**
         * Event on title that will cause accordion to open
         *
         * @default 'click'
         * @type {string}
         */
        _this.on = 'click';
        /**
         * Whether child content opacity should be animated (may cause performance issues with many child elements)
         *
         * @default true
         * @type {boolean}
         */
        _this.animateChildren = true;
        /**
         * Duration in ms of opening animation
         *
         * @default 500
         * @type {number}
         */
        _this.duration = 500;
        /**
         * Close open nested accordion content when an element closes
         *
         * @default true
         * @type {boolean}
         */
        _this.closeNested = true;
        /**
         * Allow active sections to collapse
         *
         * @default true
         * @type {boolean}
         */
        _this.collapsible = true;
        return _this;
    }

    return _AccordionBase;
}(Vue);

__decorate([vueTyped.Prop({
    type: Boolean
})], _AccordionBase.prototype, "exclusive", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _AccordionBase.prototype, "on", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _AccordionBase.prototype, "animateChildren", void 0);
__decorate([vueTyped.Prop({
    type: Number
})], _AccordionBase.prototype, "duration", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _AccordionBase.prototype, "closeNested", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _AccordionBase.prototype, "collapsible", void 0);

var Accordion = function (_AccordionBase2) {
    inherits(Accordion, _AccordionBase2);

    function Accordion() {
        classCallCheck(this, Accordion);
        return possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }

    createClass(Accordion, [{
        key: 'mounted',
        value: function mounted() {
            var self = this;
            $(this.$el).accordion({
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
Accordion = __decorate([vueTyped.Component({
    template: '<div class="ui accordion"><slot></slot></div>'
})], Accordion);

var _AccordionItemBase = function (_Vue) {
    inherits(_AccordionItemBase, _Vue);

    function _AccordionItemBase() {
        classCallCheck(this, _AccordionItemBase);
        return possibleConstructorReturn(this, (_AccordionItemBase.__proto__ || Object.getPrototypeOf(_AccordionItemBase)).apply(this, arguments));
    }

    return _AccordionItemBase;
}(Vue);

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
								key: 'activeCss',
								get: function get() {
												return this.active ? ' active' : '';
								}
				}]);
				return AccordionItem;
}(_AccordionItemBase);
AccordionItem = __decorate([vueTyped.Component({
				template: '<span>\n\t\t<div :class="activeCss + \'title\'">\n\t\t\t<i class="dropdown icon"></i> {{title}}\n\t\t</div>\n\t\t<div :class="activeCss + \'content\'">\n\t\t\t<slot></slot>\n\t\t</div>\n\t</span>'
})], AccordionItem);

var _MenuBaseBase = function (_Vue) {
    inherits(_MenuBaseBase, _Vue);

    function _MenuBaseBase() {
        classCallCheck(this, _MenuBaseBase);
        return possibleConstructorReturn(this, (_MenuBaseBase.__proto__ || Object.getPrototypeOf(_MenuBaseBase)).apply(this, arguments));
    }

    return _MenuBaseBase;
}(Vue);

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

    return MenuVertical;
}(_MenuVerticalBase);
MenuVertical = __decorate([vueTyped.Component({
    template: '<div class="ui vertical menu"><slot></slot></div>'
})], MenuVertical);

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

    return MenuHorizontal;
}(_MenuHorizontalBase);
MenuHorizontal = __decorate([vueTyped.Component({
    template: '<div class="ui menu"><slot></slot></div>'
})], MenuHorizontal);

var _MenuItemBase = function (_Vue) {
    inherits(_MenuItemBase, _Vue);

    function _MenuItemBase() {
        classCallCheck(this, _MenuItemBase);
        return possibleConstructorReturn(this, (_MenuItemBase.__proto__ || Object.getPrototypeOf(_MenuItemBase)).apply(this, arguments));
    }

    return _MenuItemBase;
}(Vue);

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

var _MenuDropdownBase = function (_Vue) {
    inherits(_MenuDropdownBase, _Vue);

    function _MenuDropdownBase() {
        classCallCheck(this, _MenuDropdownBase);
        return possibleConstructorReturn(this, (_MenuDropdownBase.__proto__ || Object.getPrototypeOf(_MenuDropdownBase)).apply(this, arguments));
    }

    return _MenuDropdownBase;
}(Vue);

__decorate([vueTyped.Prop({
    type: String
})], _MenuDropdownBase.prototype, "label", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _MenuDropdownBase.prototype, "hover", void 0);

var MenuDropdown = function (_MenuDropdownBase2) {
    inherits(MenuDropdown, _MenuDropdownBase2);

    function MenuDropdown() {
        classCallCheck(this, MenuDropdown);
        return possibleConstructorReturn(this, (MenuDropdown.__proto__ || Object.getPrototypeOf(MenuDropdown)).apply(this, arguments));
    }

    createClass(MenuDropdown, [{
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
    template: '<div class="ui dropdown item">\n    {{label}}\n    <i class="dropdown icon"></i>\n    <div class="menu">\n\t\t\t<slot></slot>\n    </div>\n  </div>'
})], MenuDropdown);

var _HeaderBase = function (_Vue) {
  inherits(_HeaderBase, _Vue);

  function _HeaderBase() {
    classCallCheck(this, _HeaderBase);
    return possibleConstructorReturn(this, (_HeaderBase.__proto__ || Object.getPrototypeOf(_HeaderBase)).apply(this, arguments));
  }

  return _HeaderBase;
}(Vue);

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
Header = __decorate([vueTyped.Component()], Header);
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
SubHeader = __decorate([vueTyped.Component()], SubHeader);
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
H1 = __decorate([vueTyped.Component()], H1);
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
H2 = __decorate([vueTyped.Component()], H2);
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
H3 = __decorate([vueTyped.Component()], H3);
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
H4 = __decorate([vueTyped.Component()], H4);
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
H5 = __decorate([vueTyped.Component()], H5);

var _MessageBase = function (_Vue) {
    inherits(_MessageBase, _Vue);

    function _MessageBase() {
        classCallCheck(this, _MessageBase);

        /**
         * Add close icon choose to hide message.
         *
         * @default false
         * @type {boolean}
         */
        var _this = possibleConstructorReturn(this, (_MessageBase.__proto__ || Object.getPrototypeOf(_MessageBase)).apply(this, arguments));

        _this.closable = false;
        /**
         * Semantic UI transition on closing message.
         *
         * @default 'fade'
         * @type {string}
         */
        _this.transition = 'fade';
        return _this;
    }

    return _MessageBase;
}(Vue);

__decorate([vueTyped.Prop({
    type: Boolean
})], _MessageBase.prototype, "closable", void 0);
__decorate([vueTyped.Prop({
    type: String
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
        key: 'mounted',
        value: function mounted() {
            var self = this;
            if (this.icon) {
                $(this.$el).addClass('icon');
            }
            if (this.kind && this.kind !== 'default') {
                $(this.$el).addClass(this.kind);
            }
            if (this.closable) {
                $(this.$el).find('.close.icon').on('click', function () {
                    $(this).closest('.message').transition(self.transition);
                });
            }
        }
    }]);
    return Message;
}(_MessageBase);
Message = __decorate([vueTyped.Component({
    template: '\n\t<div class="ui message">\n  \t<i v-if="closable" class="close icon"></i>\n\t\t<div v-if="$slots.header && !icon" class="header">\n  \t\t<slot name="header"></slot>\n\t\t</div>\n\t\t<p v-if="!icon"><slot></slot></p>\n\t\t<i v-if="icon" :class="icon + \' icon\'"></i>\n\t\t<div v-if="icon" class="content">\n\t\t\t<div v-if="$slots.header" class="header">\n    \t\t<slot name="header"></slot>\n\t\t\t</div>\n    \t<p><slot></slot></p>\n  \t</div>\n\t</div>\n\t' })], Message);

var _ModalBase = function (_Vue) {
    inherits(_ModalBase, _Vue);

    function _ModalBase() {
        classCallCheck(this, _ModalBase);
        return possibleConstructorReturn(this, (_ModalBase.__proto__ || Object.getPrototypeOf(_ModalBase)).apply(this, arguments));
    }

    return _ModalBase;
}(Vue);

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

var Modal = function (_ModalBase2) {
    inherits(Modal, _ModalBase2);

    function Modal() {
        classCallCheck(this, Modal);
        return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    createClass(Modal, [{
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
            $(this.$el).modal({
                onDeny: emit('deny'),
                onApprove: emit('approve'),
                onShow: emit('show'),
                onHide: emit('hide'),
                onHidden: emit('hidden'),
                onVisible: emit('visible'),
                closable: this.closable,
                transition: this.transition
            });
            if (this.attachShow) $(this.$el).modal('attach events', this.attachShow, 'show');
            if (this.attachHide) $(this.$el).modal('attach events', this.attachHide, 'hide');
            if (this.attachToggle) $(this.$el).modal('attach events', this.attachToggle, 'toggle');
            if (this.attachRefresh) $(this.$el).modal('attach events', this.attachRefresh, 'refresh');
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).modal('destroy');
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
    }]);
    return Modal;
}(_ModalBase);
Modal = __decorate([vueTyped.Component({
    template: '<div class="ui modal">\n  <i v-if="closable" class="close icon"></i>\n  <div class="header" v-if="hasHeader">\n    <slot name="header"></slot>\n  </div>\n  <div class="content">\n    <slot></slot>\n  </div>\n  <div class="actions" v-if="hasActions">\n\t\t<slot name="actions"></slot>\n  </div>\n</div>' })], Modal);

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
        options$$1.template = '<ui-form :validator="' + ValidatorPropName + '"' + argsStr + '>' + options$$1.template + '<ui-form>';
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

        var defaultOptions = {
            prefix: 'ui',
            settings: DefaultSettings
        };
        options$$1 = vue['util'].extend(defaultOptions, options$$1 || {});
        // set toastr default settings
        if (options$$1.toastr) {
            _.each(options$$1.toastr, function (v, k) {
                toastr.options[k] = v;
            });
        }
        var settings = options$$1.settings = vue['util'].extend(DefaultSettings, options$$1.settings || {});
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

var _TreeBase = function (_Vue) {
    inherits(_TreeBase, _Vue);

    function _TreeBase() {
        classCallCheck(this, _TreeBase);

        /**
         * HTML parent tag name. Default is `ul`.
         *
         * @default 'ul'
         * @type {string}
         */
        var _this = possibleConstructorReturn(this, (_TreeBase.__proto__ || Object.getPrototypeOf(_TreeBase)).apply(this, arguments));

        _this.parentTag = 'ul';
        /**
         * HTML child tag name. Default is `li`.
         *
         * @default 'li'
         * @type {string}
         */
        _this.childTag = 'li';
        return _this;
    }

    return _TreeBase;
}(Vue);

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
    type: String
})], _TreeBase.prototype, "parentTag", void 0);
__decorate([vueTyped.Prop({
    type: String
})], _TreeBase.prototype, "childTag", void 0);

var Tree = function (_TreeBase2) {
    inherits(Tree, _TreeBase2);

    function Tree() {
        classCallCheck(this, Tree);
        return possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
    }

    createClass(Tree, [{
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
Tree = __decorate([vueTyped.Component()], Tree);



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

function modal(instance, $this) {
    return function (element) {
        return {
            show: function show() {
                return $(element).modal('show');
            },
            hide: function hide() {
                return $(element).modal('hide');
            },
            toggle: function toggle() {
                return $(element).modal('toggle');
            },
            refresh: function refresh() {
                return $(element).modal('refresh');
            }
        };
    };
}

function tab(instance, $this) {
    return function (element) {
        return {
            changeTab: function changeTab(path) {
                return $(element).tab('change tab', path);
            }
        };
    };
}

function button(instance, $this) {
    return function (element) {
        return {
            loading: function loading(state) {
                if (state) return $(element).addClass('loading');
                return $(element).removeClass('loading');
            }
        };
    };
}



var methods = Object.freeze({
	modal: modal,
	tab: tab,
	button: button
});

__$styleInject("body.stop-scrolling {\n  height: 100%;\n  overflow: hidden; }\n\n.sweet-overlay {\n  background-color: black;\n  /* IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  /* IE8 */\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  z-index: 10000; }\n\n.sweet-alert {\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  width: 478px;\n  padding: 17px;\n  border-radius: 5px;\n  text-align: center;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -256px;\n  margin-top: -200px;\n  overflow: hidden;\n  display: none;\n  z-index: 99999; }\n  @media all and (max-width: 540px) {\n    .sweet-alert {\n      width: auto;\n      margin-left: 0;\n      margin-right: 0;\n      left: 15px;\n      right: 15px; } }\n  .sweet-alert h2 {\n    color: #575757;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 25px 0;\n    padding: 0;\n    line-height: 40px;\n    display: block; }\n  .sweet-alert p {\n    color: #797979;\n    font-size: 16px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    text-align: inherit;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal; }\n  .sweet-alert fieldset {\n    border: none;\n    position: relative; }\n  .sweet-alert .sa-error-container {\n    background-color: #f1f1f1;\n    margin-left: -17px;\n    margin-right: -17px;\n    overflow: hidden;\n    padding: 0 10px;\n    max-height: 0;\n    webkit-transition: padding 0.15s, max-height 0.15s;\n    transition: padding 0.15s, max-height 0.15s; }\n    .sweet-alert .sa-error-container.show {\n      padding: 10px 0;\n      max-height: 100px;\n      webkit-transition: padding 0.2s, max-height 0.2s;\n      transition: padding 0.25s, max-height 0.25s; }\n    .sweet-alert .sa-error-container .icon {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: white;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 3px; }\n    .sweet-alert .sa-error-container p {\n      display: inline-block; }\n  .sweet-alert .sa-input-error {\n    position: absolute;\n    top: 29px;\n    right: 26px;\n    width: 20px;\n    height: 20px;\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transition: all 0.1s;\n    transition: all 0.1s; }\n    .sweet-alert .sa-input-error::before, .sweet-alert .sa-input-error::after {\n      content: \"\";\n      width: 20px;\n      height: 6px;\n      background-color: #f06e57;\n      border-radius: 3px;\n      position: absolute;\n      top: 50%;\n      margin-top: -4px;\n      left: 50%;\n      margin-left: -9px; }\n    .sweet-alert .sa-input-error::before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n    .sweet-alert .sa-input-error::after {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n    .sweet-alert .sa-input-error.show {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      transform: scale(1); }\n  .sweet-alert input {\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid #d7d7d7;\n    height: 43px;\n    margin-top: 10px;\n    margin-bottom: 17px;\n    font-size: 18px;\n    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);\n    padding: 0 12px;\n    display: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n    .sweet-alert input:focus {\n      outline: none;\n      box-shadow: 0px 0px 3px #c4e6f5;\n      border: 1px solid #b4dbed; }\n      .sweet-alert input:focus::-moz-placeholder {\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n      .sweet-alert input:focus:-ms-input-placeholder {\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n      .sweet-alert input:focus::-webkit-input-placeholder {\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n    .sweet-alert input::-moz-placeholder {\n      color: #bdbdbd; }\n    .sweet-alert input:-ms-input-placeholder {\n      color: #bdbdbd; }\n    .sweet-alert input::-webkit-input-placeholder {\n      color: #bdbdbd; }\n  .sweet-alert.show-input input {\n    display: block; }\n  .sweet-alert .sa-confirm-button-container {\n    display: inline-block;\n    position: relative; }\n  .sweet-alert .la-ball-fall {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -27px;\n    margin-top: 4px;\n    opacity: 0;\n    visibility: hidden; }\n  .sweet-alert button {\n    background-color: #8CD4F5;\n    color: white;\n    border: none;\n    box-shadow: none;\n    font-size: 17px;\n    font-weight: 500;\n    -webkit-border-radius: 4px;\n    border-radius: 5px;\n    padding: 10px 32px;\n    margin: 26px 5px 0 5px;\n    cursor: pointer; }\n    .sweet-alert button:focus {\n      outline: none;\n      box-shadow: 0 0 2px rgba(128, 179, 235, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.05); }\n    .sweet-alert button:hover {\n      background-color: #7ecff4; }\n    .sweet-alert button:active {\n      background-color: #5dc2f1; }\n    .sweet-alert button.cancel {\n      background-color: #C1C1C1; }\n      .sweet-alert button.cancel:hover {\n        background-color: #b9b9b9; }\n      .sweet-alert button.cancel:active {\n        background-color: #a8a8a8; }\n      .sweet-alert button.cancel:focus {\n        box-shadow: rgba(197, 205, 211, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset !important; }\n    .sweet-alert button[disabled] {\n      opacity: .6;\n      cursor: default; }\n    .sweet-alert button.confirm[disabled] {\n      color: transparent; }\n      .sweet-alert button.confirm[disabled] ~ .la-ball-fall {\n        opacity: 1;\n        visibility: visible;\n        transition-delay: 0s; }\n    .sweet-alert button::-moz-focus-inner {\n      border: 0; }\n  .sweet-alert[data-has-cancel-button=false] button {\n    box-shadow: none !important; }\n  .sweet-alert[data-has-confirm-button=false][data-has-cancel-button=false] {\n    padding-bottom: 40px; }\n  .sweet-alert .sa-icon {\n    width: 80px;\n    height: 80px;\n    border: 4px solid gray;\n    -webkit-border-radius: 40px;\n    border-radius: 40px;\n    border-radius: 50%;\n    margin: 20px auto;\n    padding: 0;\n    position: relative;\n    box-sizing: content-box; }\n    .sweet-alert .sa-icon.sa-error {\n      border-color: #F27474; }\n      .sweet-alert .sa-icon.sa-error .sa-x-mark {\n        position: relative;\n        display: block; }\n      .sweet-alert .sa-icon.sa-error .sa-line {\n        position: absolute;\n        height: 5px;\n        width: 47px;\n        background-color: #F27474;\n        display: block;\n        top: 37px;\n        border-radius: 2px; }\n        .sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n          left: 17px; }\n        .sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n          right: 16px; }\n    .sweet-alert .sa-icon.sa-warning {\n      border-color: #F8BB86; }\n      .sweet-alert .sa-icon.sa-warning .sa-body {\n        position: absolute;\n        width: 5px;\n        height: 47px;\n        left: 50%;\n        top: 10px;\n        -webkit-border-radius: 2px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #F8BB86; }\n      .sweet-alert .sa-icon.sa-warning .sa-dot {\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        -webkit-border-radius: 50%;\n        border-radius: 50%;\n        margin-left: -3px;\n        left: 50%;\n        bottom: 10px;\n        background-color: #F8BB86; }\n    .sweet-alert .sa-icon.sa-info {\n      border-color: #C9DAE1; }\n      .sweet-alert .sa-icon.sa-info::before {\n        content: \"\";\n        position: absolute;\n        width: 5px;\n        height: 29px;\n        left: 50%;\n        bottom: 17px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #C9DAE1; }\n      .sweet-alert .sa-icon.sa-info::after {\n        content: \"\";\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        margin-left: -3px;\n        top: 19px;\n        background-color: #C9DAE1; }\n    .sweet-alert .sa-icon.sa-success {\n      border-color: #A5DC86; }\n      .sweet-alert .sa-icon.sa-success::before, .sweet-alert .sa-icon.sa-success::after {\n        content: '';\n        -webkit-border-radius: 40px;\n        border-radius: 40px;\n        border-radius: 50%;\n        position: absolute;\n        width: 60px;\n        height: 120px;\n        background: white;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg); }\n      .sweet-alert .sa-icon.sa-success::before {\n        -webkit-border-radius: 120px 0 0 120px;\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n        transform-origin: 60px 60px; }\n      .sweet-alert .sa-icon.sa-success::after {\n        -webkit-border-radius: 0 120px 120px 0;\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 0px 60px;\n        transform-origin: 0px 60px; }\n      .sweet-alert .sa-icon.sa-success .sa-placeholder {\n        width: 80px;\n        height: 80px;\n        border: 4px solid rgba(165, 220, 134, 0.2);\n        -webkit-border-radius: 40px;\n        border-radius: 40px;\n        border-radius: 50%;\n        box-sizing: content-box;\n        position: absolute;\n        left: -4px;\n        top: -4px;\n        z-index: 2; }\n      .sweet-alert .sa-icon.sa-success .sa-fix {\n        width: 5px;\n        height: 90px;\n        background-color: white;\n        position: absolute;\n        left: 28px;\n        top: 8px;\n        z-index: 1;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg); }\n      .sweet-alert .sa-icon.sa-success .sa-line {\n        height: 5px;\n        background-color: #A5DC86;\n        display: block;\n        border-radius: 2px;\n        position: absolute;\n        z-index: 2; }\n        .sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n          width: 25px;\n          left: 14px;\n          top: 46px;\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n        .sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n          width: 47px;\n          right: 8px;\n          top: 38px;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n    .sweet-alert .sa-icon.sa-custom {\n      background-size: contain;\n      border-radius: 0;\n      border: none;\n      background-position: center center;\n      background-repeat: no-repeat; }\n\n/*\n * Animations\n */\n@-webkit-keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@-webkit-keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@-webkit-keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n@keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n.showSweetAlert[data-animation=pop] {\n  -webkit-animation: showSweetAlert 0.3s;\n  animation: showSweetAlert 0.3s; }\n\n.showSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.showSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideFromTop 0.3s;\n  animation: slideFromTop 0.3s; }\n\n.showSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideFromBottom 0.3s;\n  animation: slideFromBottom 0.3s; }\n\n.hideSweetAlert[data-animation=pop] {\n  -webkit-animation: hideSweetAlert 0.2s;\n  animation: hideSweetAlert 0.2s; }\n\n.hideSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.hideSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideToTop 0.4s;\n  animation: slideToTop 0.4s; }\n\n.hideSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideToBottom 0.3s;\n  animation: slideToBottom 0.3s; }\n\n@-webkit-keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n.animateSuccessTip {\n  -webkit-animation: animateSuccessTip 0.75s;\n  animation: animateSuccessTip 0.75s; }\n\n.animateSuccessLong {\n  -webkit-animation: animateSuccessLong 0.75s;\n  animation: animateSuccessLong 0.75s; }\n\n.sa-icon.sa-success.animate::after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n.animateErrorIcon {\n  -webkit-animation: animateErrorIcon 0.5s;\n  animation: animateErrorIcon 0.5s; }\n\n@-webkit-keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.animateXMark {\n  -webkit-animation: animateXMark 0.5s;\n  animation: animateXMark 0.5s; }\n\n@-webkit-keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n@keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n.pulseWarning {\n  -webkit-animation: pulseWarning 0.75s infinite alternate;\n  animation: pulseWarning 0.75s infinite alternate; }\n\n@-webkit-keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n@keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n.pulseWarningIns {\n  -webkit-animation: pulseWarningIns 0.75s infinite alternate;\n  animation: pulseWarningIns 0.75s infinite alternate; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/* Internet Explorer 9 has some special quirks that are fixed here */\n/* The icons are not animated. */\n/* This file is automatically merged into sweet-alert.min.js through Gulp */\n/* Error icon */\n.sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/* Success icon */\n.sweet-alert .sa-icon.sa-success {\n  border-color: transparent\\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n.la-ball-fall,\n.la-ball-fall > div {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.la-ball-fall {\n  display: block;\n  font-size: 0;\n  color: #fff; }\n\n.la-ball-fall.la-dark {\n  color: #333; }\n\n.la-ball-fall > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n\n.la-ball-fall {\n  width: 54px;\n  height: 18px; }\n\n.la-ball-fall > div {\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-fall 1s ease-in-out infinite;\n  -moz-animation: ball-fall 1s ease-in-out infinite;\n  -o-animation: ball-fall 1s ease-in-out infinite;\n  animation: ball-fall 1s ease-in-out infinite; }\n\n.la-ball-fall > div:nth-child(1) {\n  -webkit-animation-delay: -200ms;\n  -moz-animation-delay: -200ms;\n  -o-animation-delay: -200ms;\n  animation-delay: -200ms; }\n\n.la-ball-fall > div:nth-child(2) {\n  -webkit-animation-delay: -100ms;\n  -moz-animation-delay: -100ms;\n  -o-animation-delay: -100ms;\n  animation-delay: -100ms; }\n\n.la-ball-fall > div:nth-child(3) {\n  -webkit-animation-delay: 0ms;\n  -moz-animation-delay: 0ms;\n  -o-animation-delay: 0ms;\n  animation-delay: 0ms; }\n\n.la-ball-fall.la-sm {\n  width: 26px;\n  height: 8px; }\n\n.la-ball-fall.la-sm > div {\n  width: 4px;\n  height: 4px;\n  margin: 2px; }\n\n.la-ball-fall.la-2x {\n  width: 108px;\n  height: 36px; }\n\n.la-ball-fall.la-2x > div {\n  width: 20px;\n  height: 20px;\n  margin: 8px; }\n\n.la-ball-fall.la-3x {\n  width: 162px;\n  height: 54px; }\n\n.la-ball-fall.la-3x > div {\n  width: 30px;\n  height: 30px;\n  margin: 12px; }\n\n/*\n * Animation\n */\n@-webkit-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@-moz-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -moz-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -moz-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -moz-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -moz-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@-o-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -o-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -o-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    -moz-transform: translateY(-145%);\n    -o-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    -moz-transform: translateY(145%);\n    -o-transform: translateY(145%);\n    transform: translateY(145%); } }\n", undefined);

function alert(instance, $this) {
    return function (options$$1) {
        swal.apply(this, arguments);
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
            target = target.find('> input');
        }
        target.focus();
    };
}



var modules = Object.freeze({
	alert: alert,
	toast: toast,
	focus: focus
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

function register_all_components(vue, prefix) {
    for (var k in components) {
        vue.component(prefix + '-' + Vue['util'].hyphenate(k), components[k]);
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
            var mdls = {};
            for (var k in modules) {
                mdls[k] = modules[k](instance, this);
            }
            for (var k in methods) {
                mdls[k] = methods[k](instance, this);
            }
            mdls = _.merge(mdls, instance);
            Vue['util'].defineReactive(this, '_ui', mdls);
        }
    });
}
function register_all_filters(vue, prefix, instance) {
    for (var k in filters) {
        vue.filter(prefix + '-' + Vue['util'].hyphenate(k), filters[k](instance));
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

        var defaultOptions = {
            prefix: 'ui',
            settings: DefaultSettings
        };
        options$$1 = vue['util'].extend(defaultOptions, options$$1 || {});
        // set toastr default settings
        if (options$$1.toastr) {
            _.each(options$$1.toastr, function (v, k) {
                toastr.options[k] = v;
            });
        }
        var settings = options$$1.settings = vue['util'].extend(DefaultSettings, options$$1.settings || {});
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
