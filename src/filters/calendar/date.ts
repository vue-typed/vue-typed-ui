import * as Vue from "Vue"
import * as moment from 'moment'

export function Date(instance) {
	return function (value) {		
		if (!value)	return null;
		return moment(value).format(instance.$settings.dateFormat)
	};
}