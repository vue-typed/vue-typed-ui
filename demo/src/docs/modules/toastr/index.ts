import { Options, Virtual } from 'vue-typed'
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Toastr extends Virtual<Vue>()  {
	
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