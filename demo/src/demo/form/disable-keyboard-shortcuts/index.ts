import { Component } from 'vue-typed'
import * as Vue from 'vue'
import { Base } from '../../base'

@Component({ template: require('./index.html') })
export class FormDisableKeyboardShortcuts extends Base {
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