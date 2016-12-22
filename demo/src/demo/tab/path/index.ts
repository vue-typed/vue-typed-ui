import { Component } from 'vue-typed';
import { Base } from '../../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class TabPath extends Base  {
	tab1() {
		this.$ui.tab('#tab-path-example').changeTab('one')
	}
	tab2() {
		this.$ui.tab('#tab-path-example').changeTab('two')
	}
	tab3() {
		this.$ui.tab('#tab-path-example').changeTab('three')
	}
}