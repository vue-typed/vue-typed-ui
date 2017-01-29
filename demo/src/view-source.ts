import { Component, Prop } from 'vue-typed';
import * as Vue from 'vue'

var Prism = require('prismjs');

@Component({
	template: `<pre><code :class="'language-'+lang"><slot></slot></code></pre>`
})
export class ViewSource extends Vue {

	isDemo: boolean = true

	/**
	 * Source code language.
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
		Prism.highlightElement($(this.$el).find('code')[0])
	}
}