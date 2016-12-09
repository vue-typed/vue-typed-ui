import { Util } from '../../utils';

export function Int(instance) {

	return function (value) {		
		var settings = instance.$settings.numeric
		var str = Util.numberFormat(Math.round(value), 0, settings.decimalSeparator, settings.groupSeparator);
		return str;
	};

}