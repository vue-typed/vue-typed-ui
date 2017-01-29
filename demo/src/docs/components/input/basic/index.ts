import { Options } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class InputBasic  {
	firstName: string = 'John'
	lastName: string = 'Doe'
	password: string = 'supersecretpassword'
	address: string = ''

	allowEditAddress: boolean = true

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}

	lazyName: string = 'Lazy'

	resetFullName() {
		this.firstName = 'John'
		this.lastName = 'Doe'
	}

	resetLazyName() {
		this.lazyName = 'Lazy'
	}
}