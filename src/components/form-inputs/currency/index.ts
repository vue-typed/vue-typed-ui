import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { Numeric } from '../numeric';
import { _CurrencyBase } from './_base';

require('autonumeric')


@Component()
export class Currency extends _CurrencyBase {

	beforeCreate() {
		this.$options.props['signPos'].validator = function(val) {	return val === ('left' || 'right') }		
	}

	buildOptions(options) {
		let signPos : string = Util.pickNonEmpty(this.signPos, this.$UI.$settings.numeric.signPos)		
		let sign : string = Util.pickNonEmpty(this.sign, this.$UI.$settings.numeric.sign)	
		return Object.assign(options, Util.decodeCurrencyProperties(sign, signPos))
	}

}