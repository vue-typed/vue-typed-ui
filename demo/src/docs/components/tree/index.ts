import { Options } from 'vue-typed';

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


@Options({
	template: require('./view.pug')()
})
export class Tree  {

	dummy: Object
	example: Model;


	constructor() {

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
		model.sub.push(new Model('New', 'Kid ' + ++this.counter))
	}


}