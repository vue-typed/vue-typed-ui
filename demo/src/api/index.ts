import { Component, Watch } from 'vue-typed';
import * as Vue from 'vue'
import * as _ from 'lodash'
import { VueTypedUI } from '../../../src/index';

var api = require('../../../doc/api.json')

@Component({
	template: require('./index.html')
})
export class ApiPage extends Vue {

	api_methods = {}
	api_props = {}
	api_name = ''
	api_tag = ''

	@Watch('$route.params.component')
	onChange(p) {
		this.showApi(p)
	}

	mounted() {
		this.showApi(this.$route.params['component'])
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

				_.each(v['params'], function(vp, vk){
					vp['name'] = vk
				})
			}

			name += ')'
			v['name'] = name
			return v;
		})
	}
}