import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { _TabBase } from './_base';


@Component({
	template: `<div>
		<div :class="css">
			<a v-for="i in items" class="item" v-bind:data-tab="i.dataTab">
  			{{i.caption}}
			</a>
		</div>
		<slot></slot>
	</div>`
})
export class Tab extends _TabBase {
	
	activeTab

	css: string

	items: any[] = []

	created() {
		this.activeTab = this._tabName(1);
		this.items = [];
		this.updateStyle();
	}

	mounted() {
		
		Vue.nextTick(() => {
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

	createItem(item): string {

		this.items.push(item);
		var tabName = this._tabName(this.items.length);

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
		$(this.$el).find('.menu .item').tab('destroy')
	}

}