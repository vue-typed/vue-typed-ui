import * as Vue from 'vue'
import { Options } from 'vue-typed';
var prettyHtml = require('js-beautify').html;

@Options({
	template: require('./view.pug')()
})
export class AppDocHome {

	htmlExample = prettyHtml(require('./example.pug')())
	
}