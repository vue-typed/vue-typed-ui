import * as components from './components'
import * as methods from './components/methods'
import * as modules from './modules'
import * as filters from './filters'
import * as Vue from 'vue'
import * as _ from 'lodash'

export function register_all_components(vue: typeof Vue, prefix: string) {
	for (var k in components) {
		vue.component(prefix + '-' + Vue['util'].hyphenate(k), components[k])
	}
}

export function register_all_methods(vue: typeof Vue, instance) {

	let global_methods = {
		'createValidationRule': (name: string, rule: Function) => {
			$.fn.form.settings.rules[name] = rule
		},

		'showModal': (element: string | HTMLElement | JQuery) => {
			$(element).modal('show')
		}
	}

	instance = _.merge(instance, global_methods)

	vue.mixin({
		beforeCreate: function () {

			let mdls = {}
			for (var k in modules) {
				mdls[k] = modules[k](instance, this)
			}
			for (var k in methods) {
				mdls[k] = methods[k](instance, this)
			}

			mdls = _.merge(mdls, instance)

			Vue['util'].defineReactive(this, '_ui', mdls)
		}
	})

}


export function register_all_filters(vue: typeof Vue, prefix: string, instance) {
	for (var k in filters) {
		vue.filter(prefix + '-' + Vue['util'].hyphenate(k), filters[k](instance))
	}
}


