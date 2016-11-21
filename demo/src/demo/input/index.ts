import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Input extends Base  {
	firstName: string = 'John'
	lastName: string = 'Doe'
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