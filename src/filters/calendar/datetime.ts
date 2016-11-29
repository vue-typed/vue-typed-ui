import * as Vue from "Vue"
import * as moment from 'moment'

export function DateTime(instance) {
	return function (value) {
		if (!value)	return null;		
		return moment(value).format(instance.$settings.dateFormat + ' ' + instance.$settings.timeFormat)
	};
}