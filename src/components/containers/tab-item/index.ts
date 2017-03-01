import * as Vue from 'vue'
import { Options, Prop, Watch } from 'vue-typed';
import { _TabItemBase } from './_base';


@Options({
	template: '<div :class="css" v-bind:data-tab="dataTab"><slot></slot></div>'
})
export class TabItem extends _TabItemBase {

	dataTab: string = ''

	css: string = "ui tab segment"

	@Watch('$parent.kind')
	onKindChanged(style) {
		this.updateStyle(style);
	}

	created() {
		this.updateStyle();
		this.dataTab = this.$parent['createItem'](this);
	}


	updateStyle(style?) {

		style = style || this.$parent['kind'];
		
		switch(style) {
			case 'menu':
			case 'pointing':
				this.css = 'ui tab segment';
				break;

			default:
				this.css = 'ui bottom attached tab segment'
				break;
		}
	}
}