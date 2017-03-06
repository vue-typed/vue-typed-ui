import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { _DropdownItemBase } from './_base';
import { IDropdownItem } from '../../../../lib/interface';

@Component({
	template: `<div class="item" :data-value="value"><slot></slot></div>`
})
export class DropdownItem extends _DropdownItemBase implements IDropdownItem { 

	target() : JQuery {
		return $(this.$el)
	}

}