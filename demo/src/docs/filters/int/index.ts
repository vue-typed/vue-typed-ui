import { Options } from 'vue-typed'

@Options({ template: require('./view.pug')() })
export class Int {

	number: number = 100000
	decimal: number = 12456.789

}