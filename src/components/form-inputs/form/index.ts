import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed'
import { _FormBase } from './_base';

@Component()
export class Form extends _FormBase {

	mounted() {

		var self = this
		var opt = {
			onSuccess: function () {
				self.$emit('success')
			},
			onError: function () {
				self.$emit('error')
			}
		};

		if (this.validator) {
			Object.assign(opt, {
				fields: this.validator,
				inline: this.validateInline
			})
		}

		// domProps.onsubmit is flaky, let's do with jQuery instead
		$(this.$el).submit(function (e) {
			e.preventDefault();
		});

		$(this.$el).form(opt)

		if (this.labelWidth) {
			$(this.$el).find('.field.inline > label, .fields.inline > label').width(this.labelWidth)
		}

	}

	destroyed() {
		$(this.$el).form('destroy')
	}

	render(ch) {
		return ch('form', {
			class: 'ui form',
			domProps: {
				onsubmit: function onsubmit(e) {
					e.preventDefault();
					return false;
				}
			}
		}, [this.$slots['default']]);
	}
}