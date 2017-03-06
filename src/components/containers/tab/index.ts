import * as Vue from 'vue'
import { Options, Prop, Watch } from 'vue-typed';
import { _TabBase } from './_base';
import { ITab } from '../../../../lib/interface'

@Options({
	template: `<div>
		<div :class="css">
			<a v-for="i in items" class="item" v-bind:data-tab="i.dataTab">
  			{{i.caption}}
			</a>
		</div>
		<slot></slot>
	</div>`
})
export class Tab extends _TabBase implements ITab {
		
	changeTab(path: string) {
		return $(this.$el).find('.item').tab('change tab', path);
	}

	activeTab = undefined

	css: string = ''

	items: any[] = []

	created() {		
		this.items = [];
		this.updateStyle();
	}

	target(): JQuery {
		return $(this.$el).find('.menu .item')
	}

	mounted() {
		
		Vue.nextTick(() => {
			this.activeTab = this.firstTab;
			this._suiInit();
		})
	}

	@Watch('kind')
	onStyleChanged(style) {
		this.updateStyle();
		Vue.nextTick(() => {
			this._suiInit();
		})

	}

	firstTab = undefined

	createItem(item): string {

		this.items.push(item);
		let tabName = item.path || this._tabName(this.items.length);
		if (!this.firstTab) this.firstTab = tabName

		if (item.active == true) {
			this.activeTab = tabName;
		}
		return tabName;
	}

	// create and set active semantic-ui tab
	_suiInit() {
		var el = $(this.$el).find('.menu .item')
		var self = this;
		el.tab({
			context: $(this.$el), onVisible: function () {
				self.activeTab = $(this).attr('data-tab'); 
			}
		});
		el.tab('change tab', this.activeTab);
	}

	_tabName(index): string {
		return 'tab-' + this['_uid'] + '-' + index;
	}

	updateStyle() {
		switch (this.kind) {
			case 'menu':
				this.css = 'ui top secondary menu';
				break;

			case 'pointing':
				this.css = 'ui pointing secondary menu';
				break;

			default:
				this.css = 'ui top attached tabular menu';
				break;
		}
	}

	destroyed() {
		this.target().tab('destroy')
	}

}