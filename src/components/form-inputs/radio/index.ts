import * as Vue from 'vue'
import { Options, Prop } from 'vue-typed';
import { _RadioBase } from './_base';

@Options({
	template: `
	<div class="field">
		<div class="ui radio checkbox">
			<input type="radio" class="hidden" :checked="value==val">
			<label><slot></slot></label>
		</div>
	</div>
	`
})
export class Radio extends _RadioBase {

	mounted() {

		var p = this.$parent;
		var name = this.name;

		if (p.$options.name == 'RadioGroup') {
			name = name || p['groupName'];
		}

		var self = this;

		$(this.$el).find('input')
			.attr('name', name)
			.on('change', function () {
				self.$emit('input', self.val);
			});

		Vue.nextTick(() => {
			$(this.$el).find('.ui.radio').checkbox()
		})
	}
}