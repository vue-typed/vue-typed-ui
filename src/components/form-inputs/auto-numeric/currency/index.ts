import * as Vue from 'vue'
import { Options, Prop } from 'vue-typed';
import { Util } from '../../../../utils';
import { Numeric } from '../numeric';
import { _CurrencyBase } from './_base';
import { ICurrency } from '../../../../../lib/interface';

require('autonumeric')

@Options()
export class Currency extends _CurrencyBase implements ICurrency {

	beforeCreate() {
		this.$options.props['signPos'].validator = function(val) {	return val === ('left' || 'right') }		
	}

	buildOptions(options) {
		let signPos : string = Util.pickNonEmpty(this.signPos, this.$UI.$settings.numeric.signPos)		
		let sign : string = Util.pickNonEmpty(this.sign, this.$UI.$settings.numeric.sign)	
		return Object.assign(options, Util.decodeCurrencyProperties(sign, signPos))
	}

}