import { _AccordionItemBase } from './_base';
import { Options } from 'vue-typed';

@Options({
	template: 
	`<div>
		<div :class="activeCss + 'title'">
			<i class="dropdown icon"></i> {{title}}
		</div>
		<div :class="activeCss + 'content'">
			<slot></slot>
		</div>
	</div>`
})
export class AccordionItem extends _AccordionItemBase { 
	get activeCss() {
		return this.active ? 'active ' : '';
	}
}