import { Options, Virtual } from 'vue-typed'
import * as Vue from 'vue'

@Options({ template: require('./view.pug')() })
export class FormDisableKeyboardShortcuts extends Virtual<Vue>() {
	firstName: string = ''
	lastName: string = ''

	validator = {
		firstName: {
			identifier: 'firstName',
			rules: [{ type: 'empty', prompt: 'First name can not be empty' }]
		},
		lastName: {
			identifier: 'lastName',
			rules: [{ type: 'empty', prompt: 'Last name can not be empty' }]
		}
	}

	submit() {
		this.$ui.toast.success('Changes saved!')
	}
}