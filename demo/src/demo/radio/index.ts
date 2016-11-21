import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Radio extends Base {

	foo = 0

	fruits = ['Mango', 'Durian', 'Apple', 'Orange']

	fruit = 'Durian'

}