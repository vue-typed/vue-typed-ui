import { Options } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Dropdown {

	choosen = 'first'

	selection: string[] = ['Mango', 'Durian']

	fruits = ['Mango', 'Durian', 'Apple', 'Orange']

	allowEdit = true

}