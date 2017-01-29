import { Options } from 'vue-typed';

@Options({
	template: require('./view.pug')()
})
export class Radio {

	foo = 0

	fruits = ['Mango', 'Durian', 'Apple', 'Orange']

	fruit = 'Durian'

}