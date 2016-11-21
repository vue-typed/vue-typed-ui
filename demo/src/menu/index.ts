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
	apiRoutes: any[] = []

	constructor() {
		this.routes = _.sortBy(routes.filter(r => {
			return r.path.startsWith('/demo')
		}), 'text')

		this.apiRoutes = _.map(_.keys(_.pickBy(api, function (m) {
			return !m['isBase'];
		})), function (v) {
			return {
				path: '/api/' + v,
				text: v
			}
		})
	}

}