// ref: http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events

import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { FieldBase } from '../../fields/field-base';
import { Util } from '../../../utils';
import { _InputBase } from './_base';

@Component()
export class Input extends _InputBase {

	@Watch('value')
	valueChanged(val) {
		if (this.$el.querySelector('input') == document.activeElement)
			return

		$(this.$el).find('input').val(val)
	}


	createComponent(ch) {

		let attrs = {
			type: this.password ? 'password' : 'text',
			name: this.name,
			placeholder: this.placeholder
		}

		let css = 'ui input'
		if (this.disabled) {
			css += ' disabled'
			attrs['disabled'] = true
		}

		let input = ch('input', {
			class: this.css,
			attrs,
			on: {
				input: this.emiter('input'),
				change: this.emiter('change')
			}
		})



		if (!this.icon)
			return ch('div', {
				class: css
			}, [input])

		let icon = ch('i', {
			class: 'icon ' + this.icon
		})

		let contents = []
		css = 'ui left icon input'
		if (this.iconPos == 'left') {
			contents.push(icon)
			contents.push(input)
		} else {
			contents.push(input)
			contents.push(icon)
			css = 'ui icon input'
		}

		return ch('div', {
			class: css
		}, contents)

	}

	mounted() {
		// initiate value
		var target = $(this.$el).find('input').val(this.value)

		if (this.selectOnFocus)
			target.on('focus', function () { $(this).select() })

		// make up for validation
		Util.setDataValidateAttr(this, target)
	}

}