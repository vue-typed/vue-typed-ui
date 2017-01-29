import { Options, Virtual } from 'vue-typed'
import * as Vue from 'vue'

@Options({ template: require('./view.pug')() })
export class FormVariations extends Virtual<Vue>() {
	firstName = ''
	lastName = ''
	userName = ''
	password = ''

	validator = {
		firstName: {
			identifier: 'firstName',
			rules: [{ type: 'empty' }]
		},
		lastName: {
			identifier: 'lastName',
			rules: [{ type: 'empty' }]
		}, 
		userName: {
			identifier: 'userName',
			rules: [{ type: 'empty' }]
		},
		password: {
			identifier: 'password',
			rules: [{ type: 'empty' }]
		}
	}

	submit() {
		this.$ui.alert('Submitted!')
	}

	error(errors) {
		this.$ui.alert('Oops!', errors.join('\r\n'), 'warning')

	}
}