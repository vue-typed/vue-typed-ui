import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue';

@Options({
	template: require('./view.pug')()
})
export class Accordion extends Virtual<Vue>()  {

	opening() {		
		this.$ui.toast.info('opening')
	}

	open() {		
		this.$ui.toast.info('open')
	}

	closing() {		
		this.$ui.toast.info('closing')
	}

	close() {		
		this.$ui.toast.info('close')
	}

	change() {		
		this.$ui.toast.info('change')
	}
	
}