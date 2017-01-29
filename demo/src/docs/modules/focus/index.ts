import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Focus extends Virtual<Vue>() {

	text = ''

	focusToFoo() {
		this.$ui.focus('#foo')
	}

	focusToBar() {
		this.$ui.focus('#bar')
	}

}