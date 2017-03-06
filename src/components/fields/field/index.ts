import * as Vue from 'vue'
import { Component } from 'vue-typed';
import { _FieldBase } from './_base';
import { IField } from '../../../../lib/interface';

@Component()
export class Field extends _FieldBase implements IField {

	target(): JQuery {
		return $(this.$el)
	}

	createComponent(ch) {
		return null
	}
}