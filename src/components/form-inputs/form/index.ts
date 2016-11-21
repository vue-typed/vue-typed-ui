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

		$(this.$el).form(opt)

	}

	destroyed() {
		$(this.$el).form('destroy')
	}

	render(ch) {
		return ch('form', {
			class: 'ui form',
			domProps: {
				onsubmit: function () {
					return false;
				}
			}
		}, [this.$slots['default']]);
	}
}