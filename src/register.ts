import * as c from './components'
import * as m from './components/methods'
import * as md from './modules'
import * as f from './filters'
import * as Vue from 'vue'

export function register_all_components(vue: typeof Vue, prefix: string) {
	for(var k in c) {		
		vue.component(prefix + '-' + Vue['util'].hyphenate(k), c[k])
	}
}

export function register_all_methods(instance) {	
	for(var k in m) {
		instance[k] = m[k](instance)
	}
	for(var k in md) {
		instance[k] = md[k](instance)
	}
}


export function register_all_filters(vue: typeof Vue, prefix: string, instance) {
	for(var k in f) {		
		vue.filter(prefix + '-' + Vue['util'].hyphenate(k), f[k](instance))
	}
}


