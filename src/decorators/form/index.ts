import { Component } from 'vue-typed';
import { FormOptions } from '../../../lib/form-options';
import { ValidatorPropName, ValidatorPropNameTmp } from './../../consts';

export function FormComponent(options: FormOptions): ClassDecorator {

	if (!options.template) throw 'Template should be defined when using FormComponent.'

	let args = ''
	if (options.onSuccess !== undefined) {
		args += ` v-on:success="${options.onSuccess}"`
		delete options.onSuccess
	}

	if (options.onError !== undefined) {
		args += ` v-on:error="${options.onError}"`
		delete options.onError
	}

	if (options.validateInline !== undefined) {
		args += ` :validate-inline="${options.validateInline}"`
		delete options.validateInline
	}

	options.template = `<ui-form :validator="${ValidatorPropName}"${args}>${options.template}<ui-form>`

	return function (target: typeof Function) {

		let validators = target.prototype[ValidatorPropNameTmp] || undefined
		delete target.prototype[ValidatorPropNameTmp]

		let vm = Component(options)(target) as FunctionConstructor
		Object.defineProperty(vm.prototype, ValidatorPropName, {
			value: validators
		})

		return vm;

	}
}