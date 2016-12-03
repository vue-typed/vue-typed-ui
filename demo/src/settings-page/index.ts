import * as Vue from 'vue';
import { Component } from 'vue-typed';
import { DateFormat, TimeFormat } from '../../../lib/types';
import { NumericSettings } from '../../../lib/settings';
import * as _ from "lodash"

@Component({
	template: require('./index.html')
})
export class SettingsPage extends Vue {

	dateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'MMM DD, YYYY', 'MMMM DD, YYYY']
	timeFormats = ['HH:mm', 'hh:mm A', 'HH:mm:SS']

	value = {}
	dateFormat : DateFormat = undefined
	timeFormat : TimeFormat = undefined

	groupSeparator = undefined
	decimalSeparator = undefined
	decimalPlaces = undefined
	sign = undefined
	signPos : 'left' | 'right'= undefined
	min = undefined
	max = undefined

	created() {
		this.reset()
	}

	save(e) {

		if (this.decimalSeparator == this.groupSeparator) {
			e.result = false
			this.$ui.alert('Numeric Settings Failed', 'Decimal separator can not be same as group separator.')
			return
		}

		let $set = this.$UI.$settings
		$set.dateFormat = this.dateFormat
		$set.timeFormat = this.timeFormat
		$set.numeric.decimalPlaces = this.decimalPlaces
		$set.numeric.decimalSeparator = this.decimalSeparator
		$set.numeric.groupSeparator = this.groupSeparator
		$set.numeric.sign = this.sign
		$set.numeric.signPos = this.signPos
		$set.numeric.min = this.min
		$set.numeric.max = this.max
	}

	reset() {
		let $set = this.$UI.$settings
		this.dateFormat = $set.dateFormat
		this.timeFormat = $set.timeFormat
		this.decimalPlaces = $set.numeric.decimalPlaces
		this.decimalSeparator = $set.numeric.decimalSeparator
		this.groupSeparator = $set.numeric.groupSeparator
		this.sign = $set.numeric.sign
		this.signPos = $set.numeric.signPos
		this.min = $set.numeric.min
		this.max = $set.numeric.max
	}


} 