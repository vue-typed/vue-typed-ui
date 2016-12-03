import { Component } from 'vue-typed';
import { FormOptions } from '../../../lib/form-options';
import { ValidatorPropName, ValidatorPropNameTmp } from './../../consts';

export function FormComponent(options: FormOptions): ClassDecorator {

	if (!options.template) throw 'Template should be defined when using FormComponent.'

	let args = []
	if (options.onSuccess !== undefined) {
		args.push({ key: 'v-on:success', val: options.onSuccess })
		delete options.onSuccess
	}

	if (options.onError !== undefined) {
		args.push({ key: 'v-on:error', val: options.onError })
		delete options.onError
	}

	if (options.validateInline !== undefined) {
		args.push({ key: ':validate-inline', val: options.validateInline })
		delete options.validateInline
	}

	if (options.class !== undefined) {
		args.push({ key: 'class', val: options.class })
		delete options.class
	}

	let argsStr = ' ' + args.map((v) => {
		return v.key + '="' + v.val + '"';
	}).join(' ')

	if (!options.replace) {
		options.template = `<ui-form :validator="${ValidatorPropName}"${argsStr}>${options.template}<ui-form>`
	} else {
		function htmlToElement(html) {
			var template = document.createElement('template');
			template.innerHTML = html;
			return template.content.firstChild;
		}

		var node = htmlToElement(options.template)
		var newNode = document.createElement('ui-form')
		var classes = []
		for (var i = 0; i < node.attributes.length; i++) {
			let attr = node.attributes[i]
			if (attr.name == 'class') 
				classes.push(attr.value)
			else
				newNode.setAttribute(attr.name, attr.value)
		}

		newNode.setAttribute(':validator', ValidatorPropName)
		for (var i = 0; i < args.length; i++) {
			let arg = args[i]
			if (arg.key == 'class') 
				classes.push(arg.val)
			else
				newNode.setAttribute(arg.key, arg.val)
		}

		if (classes.length) {
			newNode.setAttribute('class', classes.join(' '))
		}

		newNode.innerHTML = node['innerHTML']
		options.template = newNode.outerHTML

	}

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