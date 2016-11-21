import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { _DropdownItemBase } from './_base';


@Component({
	template: `<div class="item" :data-value="value"><slot></slot></div>`
})
export class DropdownItem extends _DropdownItemBase { 

}