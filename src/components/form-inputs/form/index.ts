import * as Vue from 'vue'
import { Options, Prop } from 'vue-typed'
import { _FormBase, _FormEvents } from './_base';
import { IForm } from '../../../../lib/interface';

@Options()
export class Form extends _FormBase implements IForm {

	target() : JQuery {
		return $(this.$el)
	}

	mounted() {

		var self = this
		var opt = {
			onSuccess: function () {
				self.$emit(_FormEvents.success)
			},
			onFailure: function (formErrors, fields) {
				self.$emit(_FormEvents.error, formErrors, fields)
			},

			// using default form keyboard shortcuts instead 
			keyboardShortcuts: false// this.keyboardShortcuts
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

		let tag = this.keyboardShortcuts ? 'form' : 'div'

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
}