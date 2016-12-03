import * as Vue from 'vue'
import { Component, Watch } from 'vue-typed'
import { routes } from '../routes';
import * as _ from 'lodash'
import { VueTypedUI } from '../../../src/index';
var api = require('../../../doc/api.json')

@Component({
	template: require('./index.html'),
	beforeRouteEnter: (to, from, next) => {
		next((vm) => {
			vm['_preload']('/' + to.params['type'] + '/' + to.params['name'])
		})
	}
})
export class BasePage extends Vue {

	type = ''
	name = ''
	examples = []

	api_methods = {}
	api_props = {}
	api_name = ''
	api_tag = ''

	readme = ''

	@Watch('$route.params')
	onChange(p) {
		this._preload(this.$route.path)
	}

	_preload(name) {
		this.load(_.find(routes, (r) => {
			return r.id == name.substr(1);
		}))
	}

	load(target) {
		if (!target) return;

		this.type = target.type
		this.name = target.name
		this.examples = target.examples
		if (target.readme) {
			this.readme = require('!html!markdown!../../docs/' + target.dir + '/README.md');
		} else {
			this.readme = '<h2>' + target.name + '</h2>'
		}
		this.showApi(target.id)
	}

	showApi(component) {

		this.api_name = _.upperFirst(_.camelCase(component))
		this.api_tag = '<' + VueTypedUI.prefix + '-' + component + '>'
		this.api_props = _.map(api[component].props, function (v, k) {
			v['name'] = k
			return v;
		})
		this.api_methods = _.map(api[component].methods, function (v, k) {

			let name = k + '('
			if (v['params']) {
				name += _.keys(v['params']).join(', ')

				_.each(v['params'], function (vp, vk) {
					vp['name'] = vk
				})
			}

			name += ')'
			v['name'] = name
			return v;
		})
	}

}