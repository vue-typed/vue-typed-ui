import { Component } from 'vue-typed';
import { Base } from '../../base'
import * as Vue from 'vue'
import { FormComponent, Validate } from '../../../../../src/index';


@FormComponent({
	template: require('./index.html'),
	onSuccess: 'submit',
	validateInline: true
})
export class FormComponentBasic extends Base {

	constructor() {
		super()
		this.$ui.createValidationRule('min', function (value, min) {
			return this.autoNumeric('get') >= parseFloat(min)
		})
	}

	created() {
		var self = this
		this.$ui.createValidationRule('dateMin', function (value: any, dateMin: string) {
			if (!dateMin || !self.dob) return true;
			var dMins = dateMin.split('/')
			var dMin = new Date(parseInt(dMins[0]), parseInt(dMins[1]) - 1, parseInt(dMins[2]))
			return self.dob.getTime() > dMin.getTime();
		})
	}

	@Validate({ type: 'empty', prompt: 'First name cannot be empty' })
	firstName: string = undefined

	@Validate({ type: 'empty', prompt: 'Last name cannot be empty' })
	lastName: string = undefined

	@Validate({ type: 'email', prompt: 'Email is not valid' })
	@Validate({ type: 'empty', prompt: 'Email cannot be empty' })
	email: string = undefined

	@Validate({ type: 'empty', prompt: 'Street address cannot be empty' })
	street: string = undefined

	countries = [
		{ id: 'id', name: 'Indonesia' },
		{ id: 'us', name: 'United State' },
		{ id: 'au', name: 'Australia' },
	]

	@Validate({ type: 'empty', prompt: 'Country cannot be empty' })
	country: any = undefined

	@Validate({ type: 'checked', prompt: 'You must agree with the terms and conditions' })
	agree: boolean = false

	@Validate({ type: 'min[17]', prompt: "Sorry but you're too young" })
	age: number = undefined

	@Validate({ type: 'empty', prompt: 'Date of birth cannot be empty' })
	@Validate({ type: 'dateMin[2015/01/01]', prompt: 'You must born not under January 01, 2015' })
	dob: Date = undefined

	@Validate({ type: 'min[1000]', prompt: "Sorry but you're too poor!" })
	salary: number = 0

	submit() {		
		this.$ui.modal('#message').show()
	}

}