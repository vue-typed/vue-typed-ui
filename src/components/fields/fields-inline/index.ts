import * as Vue from 'vue'
import { Options, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _FieldsInlineBase } from './_base';
import { IFieldsInline } from '../../../../lib/interface';

@Options()
export class FieldsInline extends _FieldsInlineBase implements IFieldsInline {

	target(): JQuery {
		return $(this.$el)
	}

	render(ch) {

		var contents = [];

		// require label?
		if (this.label) {
			contents.push(ch('label', this.label))
		}
		contents.push(this.$slots['default']);

		return ch('div', {
			'class': Util.buildClassObject('fields inline', Util.parseWide(this.wide))
		}, contents);

	}
}