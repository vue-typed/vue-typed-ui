import * as Vue from 'vue'
import { Component, Watch } from 'vue-typed';
import { _ButtonBase } from './_base';


@Component({
	// template: '<button @click="click" class="ui button" type="button"><slot></slot></button>'
})
export class Button extends _ButtonBase {

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
			on: {
				'click': this.click
			},
			'class': css
		}, children)

		return el
	}

	mounted() {
		if (this.icon) {
			var iconEl = '<i class="'+ this.icon +' icon"></i>'
			if (this.iconPos === 'right')
				$(this.$el).addClass('icon').append(' ').append(iconEl)
			else
				$(this.$el).addClass('icon').prepend(' ').prepend(iconEl)
		}
	}

	click(e) {
		this.$emit('click', e);
	}

	setDisabled(disabled) {
		if (disabled) {
			$(this.$el).addClass('disabled')
		} else {
			$(this.$el).removeClass('disabled')
		}
	}

	@Watch('disabled')
	onDisabledChanged(v) {
		this.setDisabled(!v)
	}


}