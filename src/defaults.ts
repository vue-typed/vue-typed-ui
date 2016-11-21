import { Options } from '../lib/options';
import { Settings } from '../lib/settings';



export const DefaultSettings: Settings = {
  dateFormat: 'MM/DD/YYYY',
  timeFormat: 'HH:mm',
  numeric: {
    decimalPlaces: 2,
    decimalSeparator: '.',
    groupSeparator: ',',
    max: 9999999999999.99,
    min: -9999999999999.99,
    sign: 'USD',
    signPos: 'right'
  }
}


export const DefaultOptions: Options = {
		prefix: 'ui',
		settings: DefaultSettings
}