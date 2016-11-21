import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'


class Model {
	firstName: string
	lastName: string
	sub: Model[]

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

	get html() {
		return '<div>' + this.firstName + ' ' + this.lastName +  ' <ui-button class="mini" @click="$emit(\'node-click\', model)">+</ui-button> ' + '</div>'
	}

	constructor(firstName: string, lastName: string, sub?: Model[]) {
		this.firstName = firstName
		this.lastName = lastName
		this.sub = sub || []
	}
}


@Component({
	template: require('./index.html')
})
export class Tree extends Base {

	dummy: Object
	example: Model;


	constructor() {
		super()

		this.dummy = {
			name: 'My Tree',
			children: [
				{ name: 'hello' },
				{ name: 'wat' },
				{
					name: 'child folder',
					children: [
						{
							name: 'child folder',
							children: [
								{ name: 'hello' },
								{ name: 'wat' }
							]
						},
						{ name: 'hello' },
						{ name: 'wat' },
						{
							name: 'child folder',
							children: [
								{ name: 'hello' },
								{ name: 'wat' }
							]
						}
					]
				}
			]
		}

		this.example = new Model('Penk', 'Meh', [
			new Model('Wow', 'Yeah'),
			new Model('Foo', 'Bar', [
				new Model('Kong', 'Eight'),
				new Model('Loob', 'Goosh')
			]),
			new Model('Weep', 'Yoo')
		])
	}

	counter = 0

	addChild(model: Model) {		
		console.log('this opo', model);
		
		model.sub.push(new Model('New', 'Kid ' + ++this.counter))
	}


}