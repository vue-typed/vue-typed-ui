import { Component, Prop } from 'vue-typed';
import { routes } from '../routes'
import * as _ from 'lodash'
var api = require('../../../doc/api.json')

@Component({
	template: require('./index.html')
})
export class Menu {

	@Prop()
	sidebar: boolean = false

	@Prop()
	sidebarToggle: string

	routes: any[] = routes
	

	constructor() {

		this.routes = _.map(_.groupBy(routes, 'type'), (v, k)=>{
			return {
				group: k,
				items: _.sortBy(v, 'text')
			};
		})

	}

}