import { Options } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class InputIcon  {
	userName: string = 'superuser'
	password: string = 'supersecretpassword'
	allowEditPassword: boolean = true
}