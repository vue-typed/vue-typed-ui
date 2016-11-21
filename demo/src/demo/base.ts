import { Component } from 'vue-typed';
import * as Vue from 'vue'
import { sources } from './routes';
var prettyHtml = require('pretty');
var prettyTs = require('js-beautify').js_beautify;
var demoAreaTemplate: string = require('./layout.html');





/**
 * Demo Page Base Class
 * 
 * @export
 * @abstract
 * @class Demo
 * @extends {Vue}
 */
@Component()
export abstract class Base extends Vue {

	beforeCreate() {
		if (!sources) return;

		var html = this.$options.template;
		var src = sources[this.$route.path];
		
		this['title'] = src.title;
		this['html'] = prettyHtml(src.html)
		this['ts'] = src.source.replace(/\t/g, '  ')

		this.$options.template = demoAreaTemplate.replace('<example/>', html);
	}
}