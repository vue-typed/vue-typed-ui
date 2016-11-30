import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Toastr extends Base  {
	
	info() {
		this.$ui.toast.info('Are you the 6 fingered man?')
	}

	warning() {
		this.$ui.toast.warning('My name is Inigo Montoya. You killed my father. Prepare to die!')
	}

	error() {
		this.$ui.toast.error('I do not think that word means what you think it means.', 'Inconceivable!')
	}

	remove() {
		this.$ui.toast.remove()
	}

	clear() {
		this.$ui.toast.clear()
	}

}