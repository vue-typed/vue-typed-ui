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
				
		let input = ch('input', {
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
		})

		if (!this.icon)
			return input;

		let icon = ch('i', {
			class: 'icon ' + this.icon
		})

		let contents = []
		let css = 'ui left icon input'
		if (this.iconPos == 'left') {
			contents.push(icon)
			contents.push(input)
		} else{
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

		// make up for validation
		Util.setDataValidateAttr(this, target)
	}

}