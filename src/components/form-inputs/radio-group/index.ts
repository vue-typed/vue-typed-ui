import * as Vue from 'vue'
import { Options, Prop, Watch } from 'vue-typed';
import { _RadioGroupBase } from './_base';
import { IRadioGroup } from '../../../../lib/interface';

@Options({
	template: `
	<div class="ui radio checkbox">
		<input type="radio" class="hidden" :checked="value==val">
		<label><slot></slot></label>
	</div>
	`
})
export class RadioGroup extends _RadioGroupBase implements IRadioGroup {

	target(): JQuery {
		return $(this.$el)
	}
	
	groupName

	createComponent(ch) {
		this.groupName = this.name || 'radio-group-' + this['_uid'];
		return null;
	}

}