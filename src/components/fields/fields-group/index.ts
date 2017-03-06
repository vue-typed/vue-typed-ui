import * as Vue from 'vue'
import { Options, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _FieldsGroupBase } from './_base';
import { IFieldsGroup } from '../../../../lib/interface';

@Options()
export class FieldsGroup extends _FieldsGroupBase implements IFieldsGroup {

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
			'class': Util.buildClassObject('fields group', Util.parseWide(this.wide))
		}, contents);

	}
}