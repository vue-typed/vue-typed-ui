import { Watch } from 'vue-typed';
import { Util } from '../../../../utils';
import { _NumericBaseBase } from './_base';

require('autonumeric')

export abstract class NumericBase extends _NumericBaseBase {
	target(): JQuery {
		return $(this.$el)
	}

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
		console.log('called mounted');
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

		if (this.selectOnFocus)
			target.on('focus', function () { $(this).select() })

		Util.setDataValidateAttr(this, target)
	}

	abstract buildOptions(options)

	destroyed() {
		$(this.$el).find('input').autoNumeric('destroy');
	}
}