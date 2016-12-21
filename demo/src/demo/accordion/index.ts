import { Component } from 'vue-typed';
import { Base } from '../base'

@Component({
	template: require('./index.html')
})
export class Accordion extends Base  {

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