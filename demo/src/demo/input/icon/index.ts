import { Component } from 'vue-typed';
import { Base } from '../../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class InputIcon extends Base  {
	userName: string = 'superuser'
	password: string = 'supersecretpassword'
}