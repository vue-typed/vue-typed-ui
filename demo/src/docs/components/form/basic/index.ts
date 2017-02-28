import { Options, Virtual } from 'vue-typed'
import * as Vue from 'vue'

@Options({ template: require('./view.pug')() })
export class FormBasic extends Virtual<Vue>() {
	firstName: string = 'Budi'
	lastName: string = 'Adiono'

	submit() {
		this.$ui.modal('message').show()
	}
}