import { Options } from 'vue-typed'
import { _InputBase } from './_base'
import { IInput } from '../../../../lib/interface';
import { Util } from '../../../utils';

@Options()
export class Input extends _InputBase implements IInput {


	target(): JQuery {
		return $(this.$el).find('input')
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
			domProps: {
				value: this.value
			},
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