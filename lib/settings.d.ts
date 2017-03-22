import { DateFormat, TimeFormat } from '../lib/types';

export interface Settings {
  dateFormat?: DateFormat
  timeFormat?: TimeFormat
  numeric?: NumericSettings
  toastr?: ToastrOptions
  dropdown?: SemanticUI.Dropdown.Settings
}

export interface NumericSettings {
  groupSeparator?: string
  decimalSeparator?: string
  decimalPlaces?: number
  sign?: string
  signPos?: 'left' | 'right'
  min?: number
  max?: number
}

