import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Focus extends Base {

	text = ''

	focusToFoo() {
		this.$ui.focus('#foo')
	}

	focusToBar() {
		this.$ui.focus('#bar')
	}

}