import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _FieldBaseBase } from './_base';


@Component()
export abstract class FieldBase extends _FieldBaseBase {

	abstract createComponent(ch);

	render(ch) {
		
		var slots = this.createComponent(ch) || this.$slots['default'];

		var contents = [];

		// require label?
		if (this.label) {
			contents.push(ch('label', this.label))
		}
		contents.push(slots);

		var style = this.wide ? 'fields' : 'field';
		if (this.kind) {
			style = this.kind + ' fields'
		}

		var el = ch('div', {
			'class': Util.buildClassObject(style, Util.parseWide(this.wide))
		}, contents);

		return this.postRender(ch, el);
	}

	postRender(ch, el) {
		return el
	}

	emiter(type) {
		var self = this;
		return function(e) {
			self.$emit(type, e['target'].value);	
		}
	}

}