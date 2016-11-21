import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { _RadioBase } from './_base';

@Component({
	template: `
	<div class="ui radio checkbox">
		<input type="radio" class="hidden" :checked="value==val">
		<label><slot></slot></label>
	</div>
	`
})
export class Radio extends _RadioBase {

	mounted() {

		var p = this.$parent;
		var name = this.name;

		if (p.$options.name == 'RadioGroup') {
			name = name || p['groupName'];
			$(this.$el).wrap('<div class="field"></div>')	
		}

		var self = this;

		$(this.$el).find('input')
			.attr('name', name)
			.on('change', function () {
				self.$emit('input', self.val);
			});

		Vue.nextTick(() => {
			$(this.$el).checkbox()
		})
	}
}