import * as Vue from 'vue'
import * as opts from '../lib/options'
import * as sets from '../lib/settings'
import * as formOpt from '../lib/form-options'
// import { Modal } from '../lib/methods/modal'
import {VueTypedUIMethods} from '../lib/methods'
import * as modules from '../lib/modules'

declare namespace VueTypedUI {
	export type Options = opts.Options
	export type Settings = sets.Settings
	export type FormOptions = formOpt.FormOptions
	export function FormComponent(options: FormOptions): ClassDecorator
	export function Validate(options): PropertyDecorator		
}

declare class VueTypedUI extends VueTypedUIMethods {
	static install: Vue.PluginFunction<VueTypedUI.Options>
	$settings: VueTypedUI.Settings
	
	createValidationRule(name: string, rule: Function)
	alert: modules.Alert
}

declare module "vue/types/vue" {
	interface Vue {
		$ui: VueTypedUI
	}
}

export = VueTypedUI;