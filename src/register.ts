import * as components from './components'
import * as modules from './modules'
import * as filters from './filters'
import * as Vue from 'vue'
import * as _ from 'lodash'

const hyphenateRE = /([^-])([A-Z])/g
const hyphenate = ((str: string): string => {
	return str
		.replace(hyphenateRE, '$1-$2')
		.replace(hyphenateRE, '$1-$2')
		.toLowerCase()
})

export function register_all_components(vue: typeof Vue, prefix: string) {
	for (var k in components) {
		let opt = components[k]
		if (typeof opt === 'function')
			opt = opt.options

		// clear components so it will have new names
		delete opt.components

		opt.name = prefix + '-' + hyphenate(k)
		vue.component(opt.name, vue.extend(opt))
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
			for (var k in components) {
				mdls[_.camelCase(k)] = (ref) => {
					if (typeof ref !== 'string')
						throw new Error('ref must be string represents the ref name of component')

					let component = this.$refs[ref]
					if (!component)
						throw new Error(`Could not resolve ui component in '${this.$options.name}' referenced by '${ref}'.`)

					return component
				}
			}

			mdls = _.merge(mdls, instance)

			Vue['util'].defineReactive(this, '_ui', mdls)
		}
	})

}


export function register_all_filters(vue: typeof Vue, prefix: string, instance) {
	for (var k in filters) {
		vue.filter(prefix + '-' + hyphenate(k), filters[k](instance))
	}
}


