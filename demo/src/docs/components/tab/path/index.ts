import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class TabPath extends Virtual<Vue>()  {
	tab1() {
		this.$ui.tab('tab-path-example').changeTab('one')
	}
	tab2() {
		this.$ui.tab('tab-path-example').changeTab('two')
	}
	tab3() {
		this.$ui.tab('tab-path-example').changeTab('three')
	}
}