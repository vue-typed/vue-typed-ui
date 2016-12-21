import { _AccordionItemBase } from './_base';
import { Component } from 'vue-typed';

@Component({
	template: 
	`<span>
		<div :class="activeCss + 'title'">
			<i class="dropdown icon"></i> {{title}}
		</div>
		<div :class="activeCss + 'content'">
			<slot></slot>
		</div>
	</span>`
})
export class AccordionItem extends _AccordionItemBase { 
	get activeCss() {
		return this.active ? ' active' : '';
	}
}