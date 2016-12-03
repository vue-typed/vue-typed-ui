// ref: http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events
// ref: https://github.com/BobKnothe/autoNumeric

import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { FieldBase } from '../../fields/field-base';
import { Util } from '../../../utils';
import { _NumericBase } from './_base';

require('autonumeric')


@Component()
export class Numeric extends _NumericBase {

	@Watch('value')
	valueChanged(val, old) {
		if (this.$el.querySelector('input') == document.activeElement)
			return

		$(this.$el).find('input').autoNumeric('set', val)
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
		this.setupUI();
	}

	@Watch('$UI.$settings.numeric', true)
	onSettingsChanged(val) {
		$(this.$el).find('input').autoNumeric('destroy');
		this.setupUI();
	}
	
	
	setupUI() {
		var def = this.$UI.$settings.numeric

		var opt = {
			aDec: Util.pickNonEmpty(this.decimalSeparator, def.decimalSeparator),
			aSep: Util.pickNonEmpty(this.groupSeparator, def.groupSeparator),			
			mDec: Util.pickNonEmpty(this.decimalPlaces, def.decimalPlaces),
			vMin: Util.pickNonEmpty(this.min, def.min),
			vMax: Util.pickNonEmpty(this.max, def.max)
		}

		if (this.integer === true) {
			opt.mDec = 0
			opt.aSep = ''
		}

		var target = $(this.$el).find('input')
		.autoNumeric('init', this.buildOptions(opt))
		.autoNumeric('set', this.value || 0).on('keyup change paste propertychange', (v) => {
			var value = $(v.target).autoNumeric('get')
			this.$emit('input', value)
			this.$emit('change', value)
		})

		Util.setDataValidateAttr(this, target)
	}

	buildOptions(options) {
		return options
	}

	destroyed() {
		$(this.$el).find('input').autoNumeric('destroy');
	}

}