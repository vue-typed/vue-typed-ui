import { Util } from '../../utils';

export function Numeric(instance) {

	return function (value) {		
		var settings = instance.$settings.numeric
		var str = Util.numberFormat(value, settings.decimalPlaces, settings.decimalSeparator, settings.groupSeparator);
		return str;
	};

}