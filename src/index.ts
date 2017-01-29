import * as Vue from 'vue';
import { PluginObject } from 'vue';
import { Options } from '../lib/options';
import { Settings } from '../lib/settings';
import { DefaultOptions, DefaultSettings } from './defaults';
import * as toastr from 'toastr'
import * as _ from 'lodash'
import { Virtual } from 'vue-typed';

import { register_all_components, register_all_filters, register_all_methods } from './register';


/**
 * Main VueTypedUI Plugin Class
 * 
 * @class VueTypedUIOptions
 */
class VueTypedUI {

	constructor(vue: typeof Vue, options?: Options) {

		options = vue['util'].extend(DefaultOptions, options || {})

		var settings = options.settings = vue['util'].extend(DefaultSettings, options.settings || {})		

		// set toastr default settings
		if (options.settings.toastr) {
			_.each(options.settings.toastr, (v, k) => {
				toastr.options[k] = v
			})
		}


		var uiRoot = {
			$settings: settings
		}
		vue['util'].defineReactive(Vue.prototype, '$UI', uiRoot)


		VueTypedUI.prefix = options.prefix


		register_all_components(vue, options.prefix)
		register_all_filters(vue, options.prefix, uiRoot)
		register_all_methods(vue, this)

		Object.defineProperty(vue.prototype, '$ui', {
			get() { return this._ui; }
		})

	}

	static prefix: string
	static installed: boolean
	static install(vue, options?: Options): Vue.PluginFunction<Options> {
		if (this.installed) return;
		var instance = new VueTypedUI(vue, options);
	}
}


var install = VueTypedUI.install;


export { FormComponent } from './decorators/form';
export { Validate } from './decorators/validate';
export { VueTypedUI, install };