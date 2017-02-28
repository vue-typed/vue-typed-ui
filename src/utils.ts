import { DataValidateAttr } from './consts';

export class Util {

	static buildClassObject(...classes: string[]) {
		var obj = {}
		classes.forEach((s) => {
			obj[s] = true;
		})
		return obj;
	}


	/**
	 * Convert number [wide] to word 
	 * 
	 * @static
	 * @param {any} wide
	 * @returns
	 * 
	 * @memberOf Util
	 */
	static parseWide(wide) {
		if (wide) {
			wide = wide.toString()
			switch (wide) {
				case '1':
					wide = "one"
					break;
				case '2':
					wide = "two"
					break;
				case '3':
					wide = "three"
					break;
				case '4':
					wide = "four"
					break;
				case '5':
					wide = "five"
					break;
				case '6':
					wide = "six"
					break;
				case '7':
					wide = "seven"
					break;
				case '8':
					wide = "eight"
					break;
				case '9':
					wide = "nine"
					break;
				case '10':
					wide = "ten"
					break;
				case '11':
					wide = "eleven"
					break;
				case '12':
					wide = "twelve"
					break;
				case '13':
					wide = "thirteen"
					break;
				case '14':
					wide = "fourteen"
					break;
				case '15':
					wide = "fifteen"
					break;
				case '16':
					wide = "sixteen"
					break;
			}

			return 'wide ' + wide.trim();
		} else {
			return '';
		}
	}


	/**
	 * Returns which one is not null nor undefined
	 * 
	 * @static
	 * @param {any} val1
	 * @param {any} val2
	 * @returns
	 * 
	 * @memberOf Util
	 */
	static pickNonEmpty(val1, val2) {
		if (val1 === undefined || val1 === null) return val2;
		return val1;
	}

	
	/**
	 * Find model name from element and use it as data-validate attribute
	 * 
	 * @static
	 * @param {any} component
	 * @param {JQuery} element
	 * 
	 * @memberOf Util
	 */
	static setDataValidateAttr(component, element: JQuery) {
		let id = component.$props.name
		if (id) element.attr(DataValidateAttr, id)
	}

	/**
	 * Build autonumber currency properties
	 * 
	 * @static
	 * @param {string} sign
	 * @param {string} signPos
	 * @returns {{ aSign: string, pSign: string }}
	 * 
	 * @memberOf Util
	 */
	static decodeCurrencyProperties(sign: string, signPos: string) : { aSign: string, pSign: string } {
		if (signPos === 'left') {
			signPos = 'p'
			sign = sign.trim() + ' '
		} else {
			signPos = 's'
			sign = ' ' + sign.trim()
		}

		return {
			aSign: sign,
			pSign: signPos
		}
	}


	// http://stackoverflow.com/a/2901136/1586914
	static numberFormat(number, decimals, dec_point, thousands_sep) {
		// http://kevin.vanzonneveld.net
		// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +     bugfix by: Michael White (http://getsprink.com)
		// +     bugfix by: Benjamin Lupton
		// +     bugfix by: Allan Jensen (http://www.winternet.no)
		// +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		// +     bugfix by: Howard Yeend
		// +    revised by: Luke Smith (http://lucassmith.name)
		// +     bugfix by: Diogo Resende
		// +     bugfix by: Rival
		// +      input by: Kheang Hok Chin (http://www.distantia.ca/)
		// +   improved by: davook
		// +   improved by: Brett Zamir (http://brett-zamir.me)
		// +      input by: Jay Klehr
		// +   improved by: Brett Zamir (http://brett-zamir.me)
		// +      input by: Amir Habibi (http://www.residence-mixte.com/)
		// +     bugfix by: Brett Zamir (http://brett-zamir.me)
		// +   improved by: Theriault
		// +   improved by: Drew Noakes
		// *     example 1: number_format(1234.56);
		// *     returns 1: '1,235'
		// *     example 2: number_format(1234.56, 2, ',', ' ');
		// *     returns 2: '1 234,56'
		// *     example 3: number_format(1234.5678, 2, '.', '');
		// *     returns 3: '1234.57'
		// *     example 4: number_format(67, 2, ',', '.');
		// *     returns 4: '67,00'
		// *     example 5: number_format(1000);
		// *     returns 5: '1,000'
		// *     example 6: number_format(67.311, 2);
		// *     returns 6: '67.31'
		// *     example 7: number_format(1000.55, 1);
		// *     returns 7: '1,000.6'
		// *     example 8: number_format(67000, 5, ',', '.');
		// *     returns 8: '67.000,00000'
		// *     example 9: number_format(0.9, 0);
		// *     returns 9: '1'
		// *    example 10: number_format('1.20', 2);
		// *    returns 10: '1.20'
		// *    example 11: number_format('1.20', 4);
		// *    returns 11: '1.2000'
		// *    example 12: number_format('1.2000', 3);
		// *    returns 12: '1.200'
		var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			toFixedFix = function (n, prec) {
				// Fix for IE parseFloat(0.55).toFixed(0) = 0;
				var k = Math.pow(10, prec);
				return Math.round(n * k) / k;
			},
			s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}
}