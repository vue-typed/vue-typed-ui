import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _FieldsGroupBase } from './_base';

@Component()
export class FieldsGroup extends _FieldsGroupBase {

	render(ch) {

		var contents = [];

		// require label?
		if (this.label) {
			contents.push(ch('label', this.label))
		}

		contents.push(this.$slots['default']);

		return ch('div', {
			'class': Util.buildClassObject('fields group', Util.parseWide(this.wide))
		}, contents);

	}
}