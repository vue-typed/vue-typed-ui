import { Options } from 'vue-typed';
import { _FieldBase } from './_base';
import { IField } from '../../../../lib/interface';

@Options()
export class Field extends _FieldBase implements IField {

	target(): JQuery {
		return $(this.$el)
	}

	createComponent(ch) {
		return null
	}
		
}