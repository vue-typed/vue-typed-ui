import { Component } from 'vue-typed';
import * as Vue from 'vue'
import { FormComponent, Validate } from '../../../../../../src/index';


@FormComponent({
	template: require('./view.pug')(),
	onSuccess: 'register',
	validateInline: true,
	replace: true
})
export class FormComponentReplace extends Vue {

	@Validate({ type: 'empty' })
	userName = ''

	@Validate({ type: 'empty' })
	password = ''

	@Validate({
		type: 'match[password]',
		prompt: 'Password confirmation do not match.'
	})
	passwordConfirm: string = ""

	register() {
		this.$ui.alert("Succes", "You're officially registered!", "success")
	}

}