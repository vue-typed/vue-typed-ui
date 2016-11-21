import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { _RadioGroupBase } from './_base';

@Component({
	template: `
	<div class="ui radio checkbox">
		<input type="radio" class="hidden" :checked="value==val">
		<label><slot></slot></label>
	</div>
	`
})
export class RadioGroup extends _RadioGroupBase {
	
	groupName

	createComponent(ch) {
		this.groupName = this.name || 'radio-group-' + this['_uid'];
		return null;
	}

}