import * as Vue from 'vue';
import { Options } from '../lib/options';
import { Settings } from '../lib/settings';
import { DefaultOptions, DefaultSettings } from './defaults';
import * as toastr from 'toastr'
import * as _ from 'lodash'

import { register_all_components, register_all_filters, register_all_methods } from './register';






/**
 * Main VueTypedUI Plugin Class
 * 
 * @class VueTypedUIOptions
 */
class VueTypedUI {

	$settings: Settings

	constructor(vue: typeof Vue, options?: Options) {

		const defaultOptions = <Options>{
			prefix: 'ui',
			settings: DefaultSettings
		}

		options = vue['util'].extend(defaultOptions, options || {})

		// set toastr default settings
		if (options.toastr) {
			_.each(options.toastr, (v, k) => {
				toastr.options[k] = v
			})			
		}
		
		this.$settings = options.settings = vue['util'].extend(DefaultSettings, options.settings || {})
		VueTypedUI.prefix = options.prefix
		
		
		register_all_components(vue, options.prefix)
		register_all_filters(vue, options.prefix, this)
		register_all_methods(vue, this)

	}

	static prefix: string
	static installed: boolean
	static install(vue, options?: Options): Vue.PluginFunction<Options> {
		if (this.installed) return;
		var instance = new VueTypedUI(vue, options);

		Object.defineProperty(Vue.prototype, '$ui', {
			get() { return this._ui; }
		})
	}
}


var install = VueTypedUI.install;


export { FormComponent } from './decorators/form';
export { Validate } from './decorators/validate';
export { VueTypedUI, install };