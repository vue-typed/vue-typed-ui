import { Main } from './main';
import * as demoRoute from './demo/routes';
import * as _ from 'lodash'
var api = require('../../doc/api.json')


export var routes = _.map(_.keys(_.pickBy(api, function (m) {
	return !m['isBase'];
})), function (v) {

	var target = api[v]

	var children = _.filter(demoRoute.routes, (r) => {
		return r.group == target.id
	})

	return {
		path: '/' + v, //'/' + target.module + '/api',
		text: target.module,
		name: target.module,
		id: target.id,
		type: target.type,
		readme: target.readme,
		dir: target.dir,

		examples: _.map(children, (c) => {
			return {				
				text: c.text,
				path: '/' + v + c.path
			};
		})

	}
})

export var exampleRoutes = _.map(demoRoute.routes, (r) => {
	r['meta'] = {
		id: r.path
	}
	r.path = r.path.substr(1)
	return r;
}) as any