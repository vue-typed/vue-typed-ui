import * as Vue from "Vue"
import * as moment from 'moment'

export function Date(instance) {
	return function (value) {		
		return moment(value).format(instance.$settings.dateFormat)
	};
}