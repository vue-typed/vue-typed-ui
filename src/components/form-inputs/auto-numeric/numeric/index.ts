// ref: http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events
// ref: https://github.com/BobKnothe/autoNumeric

import * as Vue from 'vue'
import { Options } from 'vue-typed';
import { _NumericBase } from './_base';
import { INumeric } from '../../../../../lib/interface';


@Options()
export class Numeric extends _NumericBase implements INumeric {

	buildOptions(options) {
		return options
	}
	
}