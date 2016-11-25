/**
  * vue-typed-ui 0.0.1-alpha
  * UI components made with Semantic UI, VueTyped and friends
  * https://github.com/vue-typed/vue-typed-ui
  
  * Copyright 2016, Budi Adiono <budiadiono@gmail.com>
  * Released under the MIT license.
  '*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vue-typed'), require('moment')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vue-typed', 'moment'], factory) :
  (factory((global.VueTypedUI = global.VueTypedUI || {}),global.Vue,global.vueTyped,global.moment));
}(this, (function (exports,Vue,vueTyped,moment) { 'use strict';

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
        return possibleConstructorReturn(this, (_FormBase.__proto__ || Object.getPrototypeOf(_FormBase)).apply(this, arguments));
    }

    return _FormBase;
}(Vue);

__decorate([vueTyped.Prop()], _FormBase.prototype, "validator", void 0);
__decorate([vueTyped.Prop({
    type: Boolean
})], _FormBase.prototype, "validateInline", void 0);

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
                onError: function onError() {
                    self.$emit('error');
                }
            };
            if (this.validator) {
                Object.assign(opt, {
                    fields: this.validator,
                    inline: this.validateInline
                });
            }
            $(this.$el).form(opt);
        }
    }, {
        key: 'destroyed',
        value: function destroyed() {
            $(this.$el).form('destroy');
        }
    }, {
        key: 'render',
        value: function render(ch) {
            return ch('form', {
                class: 'ui form',
                domProps: {
                    onsubmit: function onsubmit() {
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
            var style = 'field';
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
            return ch('input', {
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

var Calendar = function (_CalendarBase2) {
    inherits(Calendar, _CalendarBase2);

    function Calendar() {
        classCallCheck(this, Calendar);
        return possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).apply(this, arguments));
    }

    createClass(Calendar, [{
        key: 'createComponent',
        value: function createComponent(ch) {
            return ch('div', { attrs: { 'class': 'ui calendar' } }, [ch('div', { attrs: { 'class': 'ui input left icon' } }, [ch('i', { attrs: { 'class': this.icon + ' icon' } }), ch('input', { attrs: { type: 'text', name: this.name, placeholder: this.placeholder } })])]);
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
            var _this2 = this;

            var sender = this;
            var options = {
                type: this.type,
                onChange: function onChange(date, text) {
                    _this2.$emit('input', date);
                }
            };
            if (this.rangeStart) {
                Object.assign(options, {
                    startCalendar: this.rangeStart
                });
            }
            if (this.rangeEnd) {
                Object.assign(options, {
                    endCalendar: this.rangeEnd
                });
            }
            $(this.$el)['calendar'](this.buildOptions(options))['calendar']('set date', this.value, true, false);
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options) {
            return options;
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

        var _this = possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));

        _this.type = 'date';
        _this.icon = 'calendar';
        return _this;
    }

    createClass(Date, [{
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val) {
            $(this.$el)['calendar']('destroy');
            this.setupUi();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options) {
            var format = !this.format || this.format == 'default' ? this.$ui.$settings.dateFormat : this.format;
            Object.assign(options, {
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
            return options;
        }
    }]);
    return Date;
}(_DateBase);
__decorate([vueTyped.Watch('$ui.$settings.dateFormat')], Date.prototype, "onSettingsChanged", null);
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

        var _this = possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).apply(this, arguments));

        _this.type = 'time';
        _this.icon = 'time';
        return _this;
    }

    createClass(Time, [{
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val) {
            $(this.$el)['calendar']('destroy');
            this.setupUi();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options) {
            var format = !this.format || this.format == 'default' ? this.$ui.$settings.timeFormat : this.format;
            Object.assign(options, {
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
            return options;
        }
    }]);
    return Time;
}(_TimeBase);
__decorate([vueTyped.Watch('$ui.$settings.timeFormat')], Time.prototype, "onSettingsChanged", null);
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

        var _this = possibleConstructorReturn(this, (DateTime.__proto__ || Object.getPrototypeOf(DateTime)).apply(this, arguments));

        _this.type = 'datetime';
        _this.icon = 'calendar';
        return _this;
    }

    createClass(DateTime, [{
        key: 'onSettingsChanged',
        value: function onSettingsChanged(val, old) {
            if (old.dateFormat === val.dateFormat && old.timeFormat === val.timeFormat) return;
            $(this.$el)['calendar']('destroy');
            this.setupUi();
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(options) {
            var format = !this.format || this.format == 'default' ? this.$ui.$settings.dateFormat + ' ' + this.$ui.$settings.timeFormat : this.format;
            Object.assign(options, {
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
            return options;
        }
    }]);
    return DateTime;
}(_DatetimeBase);
__decorate([vueTyped.Watch('$ui.$settings')], DateTime.prototype, "onSettingsChanged", null);
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

            var def = this.$ui.$settings.numeric;
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
        value: function buildOptions(options) {
            return options;
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
__decorate([vueTyped.Watch('$ui.$settings.numeric', true)], Numeric.prototype, "onSettingsChanged", null);
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
        value: function buildOptions(options) {
            var signPos = Util.pickNonEmpty(this.signPos, this.$ui.$settings.numeric.signPos);
            var sign = Util.pickNonEmpty(this.sign, this.$ui.$settings.numeric.sign);
            return Object.assign(options, Util.decodeCurrencyProperties(sign, signPos));
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
                $(this.$el).wrap('<div class="field"></div>');
            }
            var self = this;
            $(this.$el).find('input').attr('name', name).on('change', function () {
                self.$emit('input', self.val);
            });
            Vue.nextTick(function () {
                $(_this2.$el).checkbox();
            });
        }
    }]);
    return Radio;
}(_RadioBase);
Radio = __decorate([vueTyped.Component({
    template: '\n\t<div class="ui radio checkbox">\n\t\t<input type="radio" class="hidden" :checked="value==val">\n\t\t<label><slot></slot></label>\n\t</div>\n\t'
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
            return ch('div', { 'class': 'ui selection dropdown' }, [ch('input', { attrs: { type: 'hidden', name: this.name } }), ch('i', { 'class': 'dropdown icon' }), ch('div', { 'class': 'default text' }, this.placeholder), ch('div', { 'class': 'menu' }, this.$slots['default'])]);
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
__decorate([vueTyped.Prop({
    type: String
})], _MenuItemBase.prototype, "to", void 0);
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

var _ViewSourceBase = function (_Vue) {
    inherits(_ViewSourceBase, _Vue);

    function _ViewSourceBase() {
        classCallCheck(this, _ViewSourceBase);
        return possibleConstructorReturn(this, (_ViewSourceBase.__proto__ || Object.getPrototypeOf(_ViewSourceBase)).apply(this, arguments));
    }

    return _ViewSourceBase;
}(Vue);

__decorate([vueTyped.Prop({
    type: String
})], _ViewSourceBase.prototype, "lang", void 0);

var hljs = require('highlight.js');
/**
 * You'll need to reference highlight.js css style in your HTML
 * eg: <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/github.min.css" type="text/css" rel="stylesheet">
 *
 * @export
 * @class ViewSource
 * @extends {Vue}
 */
var ViewSource = function (_ViewSourceBase2) {
    inherits(ViewSource, _ViewSourceBase2);

    function ViewSource() {
        classCallCheck(this, ViewSource);

        var _this = possibleConstructorReturn(this, (ViewSource.__proto__ || Object.getPrototypeOf(ViewSource)).apply(this, arguments));

        _this.isDemo = true;
        _this.noHighlight = false;
        return _this;
    }

    createClass(ViewSource, [{
        key: 'mounted',
        value: function mounted() {
            if (this.noHighlight) return;
            hljs.highlightBlock(this.$el);
        }
    }]);
    return ViewSource;
}(_ViewSourceBase);
__decorate([vueTyped.Prop()], ViewSource.prototype, "noHighlight", void 0);
ViewSource = __decorate([vueTyped.Component({
    template: '<pre><code :class="lang"><slot></slot></code></pre>'
})], ViewSource);

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

function FormComponent(options) {
    if (!options.template) throw 'Template should be defined when using FormComponent.';
    var args = '';
    if (options.onSuccess !== undefined) {
        args += ' v-on:success="' + options.onSuccess + '"';
        delete options.onSuccess;
    }
    if (options.onError !== undefined) {
        args += ' v-on:error="' + options.onError + '"';
        delete options.onError;
    }
    if (options.validateInline !== undefined) {
        args += ' :validate-inline="' + options.validateInline + '"';
        delete options.validateInline;
    }
    options.template = '<ui-form :validator="' + ValidatorPropName + '"' + args + '>' + options.template + '<ui-form>';
    return function (target) {
        var validators = target.prototype[ValidatorPropNameTmp] || undefined;
        delete target.prototype[ValidatorPropNameTmp];
        var vm = vueTyped.Component(options)(target);
        Object.defineProperty(vm.prototype, ValidatorPropName, {
            value: validators
        });
        return vm;
    };
}

function Validate(options) {
    return function (target, key) {
        if (!target[ValidatorPropNameTmp]) {
            target[ValidatorPropNameTmp] = {};
        }
        var validate = {
            identifier: key,
            rules: [options]
        };
        if (target[ValidatorPropNameTmp][key]) {
            target[ValidatorPropNameTmp][key].rules.push(options);
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
    function VueTypedUI(vue, options) {
        classCallCheck(this, VueTypedUI);

        var defaultOptions = {
            prefix: 'ui',
            settings: DefaultSettings
        };
        options = vue['util'].extend(defaultOptions, options || {});
        this.$settings = options.settings = vue['util'].extend(DefaultSettings, options.settings || {});
        VueTypedUI.prefix = options.prefix;
        register_all_components(vue, options.prefix);
        register_all_filters(vue, options.prefix, this);
        register_all_methods(this);
    }

    createClass(VueTypedUI, [{
        key: 'showModal',
        value: function showModal(element) {
            $(element)['modal']('show');
        }
    }, {
        key: 'createValidationRule',
        value: function createValidationRule(name, rule) {
            $.fn.form.settings.rules[name] = rule;
        }
    }], [{
        key: 'install',
        value: function install$1(vue, options) {
            if (this.installed) return;
            var instance = new VueTypedUI(vue, options);
            vue.util.defineReactive(Vue.prototype, '$ui', instance);
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



var c = Object.freeze({
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
	get MenuVertical () { return MenuVertical; },
	get MenuHorizontal () { return MenuHorizontal; },
	get MenuItem () { return MenuItem; },
	get MenuDropdown () { return MenuDropdown; },
	get ViewSource () { return ViewSource; },
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

function modal(instance) {
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

function tab(instance) {
    return function (element) {
        return {
            changeTab: function changeTab(path) {
                return $(element).tab('change tab', path);
            }
        };
    };
}

function button(instance) {
    return function (element) {
        return {
            loading: function loading(state) {
                if (state) return $(element).addClass('loading');
                return $(element).removeClass('loading');
            }
        };
    };
}



var m = Object.freeze({
	modal: modal,
	tab: tab,
	button: button
});

function DateTime$1(instance) {
    return function (value) {
        return moment(value).format(instance.$settings.dateFormat + ' ' + instance.$settings.timeFormat);
    };
}

function Date$1(instance) {
    return function (value) {
        return moment(value).format(instance.$settings.dateFormat);
    };
}

function Time$1(instance) {
    return function (value) {
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



var f = Object.freeze({
	DateTime: DateTime$1,
	Date: Date$1,
	Time: Time$1,
	Numeric: Numeric$1,
	Currency: Currency$1
});

function register_all_components(vue, prefix) {
    for (var k in c) {
        vue.component(prefix + '-' + Vue['util'].hyphenate(k), c[k]);
    }
}
function register_all_methods(instance) {
    for (var k in m) {
        instance[k] = m[k](instance);
    }
}
function register_all_filters(vue, prefix, instance) {
    for (var k in f) {
        vue.filter(prefix + '-' + Vue['util'].hyphenate(k), f[k](instance));
    }
}

/**
 * Main VueTypedUI Plugin Class
 *
 * @class VueTypedUIOptions
 */

var VueTypedUI = function () {
    function VueTypedUI(vue, options) {
        classCallCheck(this, VueTypedUI);

        var defaultOptions = {
            prefix: 'ui',
            settings: DefaultSettings
        };
        options = vue['util'].extend(defaultOptions, options || {});
        this.$settings = options.settings = vue['util'].extend(DefaultSettings, options.settings || {});
        VueTypedUI.prefix = options.prefix;
        register_all_components(vue, options.prefix);
        register_all_filters(vue, options.prefix, this);
        register_all_methods(this);
    }

    createClass(VueTypedUI, [{
        key: 'showModal',
        value: function showModal(element) {
            $(element)['modal']('show');
        }
    }, {
        key: 'createValidationRule',
        value: function createValidationRule(name, rule) {
            $.fn.form.settings.rules[name] = rule;
        }
    }], [{
        key: 'install',
        value: function install(vue, options) {
            if (this.installed) return;
            var instance = new VueTypedUI(vue, options);
            vue.util.defineReactive(Vue.prototype, '$ui', instance);
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
