import * as Vue from 'vue'
import { Options, Watch } from 'vue-typed';
import { _ButtonBase } from './_base';
import { IButton } from '../../../../lib/interface'

@Options({
	// template: '<button @click="click" class="ui button" type="button"><slot></slot></button>'
})
export class Button extends _ButtonBase implements IButton {

	target(): JQuery {
		return $(this.$el)
	}

	loading(state: boolean): JQuery {
		let target = this.target()
		if (state)
			return target.addClass('loading')
		return target.removeClass('loading')
	}


	render(ch) {

		var css = 'ui button'
		var children = []
		var hiddenSlot = this.$slots['hidden']
		if (hiddenSlot) {
			css += ' animated'
			if (this.animation) css += ' ' + this.animation
			children.push(ch('div', {
				'class': 'visible content'
			}, this.$slots['default']))
			children.push(ch('div', {
				'class': 'hidden content'
			}, hiddenSlot))
		} else {
			children = this.$slots['default']
		}

		if (this.disabled) {
			css += ' disabled'
		}

		if (this.size) {
			css += ' ' + this.size
		}

		if (this.float) {
			css += ' ' + this.float + ' floated'
		}

		if (this.color) {
			css += ' ' + this.color
		}

		var el = ch('button', {
			attrs: {
				type: this.type
			},
			on: {
				'click': this.click
			},
			'class': css
		}, children)

		return el
	}

	mounted() {
		if (this.icon) {
			let iconEl = '<i class="' + this.icon + ' icon"></i>'
			let target = this.target()
			if (this.iconPos === 'right')
				target.addClass('icon').append(' ').append(iconEl)
			else
				target.addClass('icon').prepend(' ').prepend(iconEl)
		}
	}

	click(e) {
		this.$emit('click', e);
	}

	setDisabled(disabled) {
		let target = this.target()
		if (disabled) {
			target.addClass('disabled')
		} else {
			target.removeClass('disabled')
		}
	}

	@Watch('disabled')
	onDisabledChanged(v) {
		this.setDisabled(!v)
	}


}