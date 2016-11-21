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
		})
	}
	
	mounted() {
		// initiate value
		var target = $(this.$el).find('input').val(this.value)

		// make up for validation
		Util.setDataValidateAttr(this, target)
	}

}