import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Dropdown extends Base {

	choosen = 'first'

	selection: string[] = ['Mango', 'Durian']

	fruits = ['Mango', 'Durian', 'Apple', 'Orange']

}