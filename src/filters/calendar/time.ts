import * as Vue from "Vue"
import * as moment from 'moment'

export function Time(instance) {
	return function (value) {
		if (!value)	return null;		
		return moment(value).format(instance.$settings.timeFormat)
	};
}