import { Component } from 'vue-typed';
import { Base } from '../../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class FormVariations extends Base {
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