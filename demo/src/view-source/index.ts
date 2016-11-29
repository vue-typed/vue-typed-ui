import { Component, Prop } from 'vue-typed';
import * as Vue from 'vue'


var hljs = require('highlight.js');

/**
 * You'll need to reference highlight.js css style in your HTML
 * eg: <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/github.min.css" type="text/css" rel="stylesheet">
 * 
 * @export
 * @class ViewSource
 * @extends {Vue}
 */

@Component({
	template: '<pre><code :class="lang"><slot></slot></code></pre>'
})
export class ViewSource extends Vue {

	isDemo: boolean = true

	/**
	 * Source code language. The list of supported language is available in th: http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html. Fill with `nohighlight` to disable highlighting.
	 * 
	 * @type {string}
	 * @memberOf ViewSource
	 */
	@Prop({
		type: String
	})
	lang: string

	@Prop()
	noHighlight: boolean = false

	mounted() {
		if (this.noHighlight) return;
		hljs.highlightBlock(this.$el);
	}
}