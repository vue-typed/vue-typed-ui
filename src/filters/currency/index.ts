import { Util } from '../../utils';

export function Currency(instance) {

	return function (value) {		
		var settings = instance.$settings.numeric
		var str = Util.numberFormat(value, settings.decimalPlaces, settings.decimalSeparator, settings.groupSeparator);

		if (settings.sign) {
			var prop = Util.decodeCurrencyProperties(settings.sign, settings.signPos)			
			if (prop.pSign === 's')
				return str + prop.aSign
			return prop.aSign + str;
		}

		return str;
	};

}