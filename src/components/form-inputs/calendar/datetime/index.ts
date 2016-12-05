import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { Calendar } from '../calendar';
import { Settings } from '../../../../../lib/settings';
import * as moment from 'moment'
import { _DatetimeBase } from './_base';


@Component()
export class DateTime extends _DatetimeBase {

	calendarOptions() {
		return {
			type: 'datetime',
			icon: 'calendar'
		};
	}

	@Watch('$UI.$settings')
	onSettingsChanged(val: Settings, old: Settings) {
		if (old.dateFormat === val.dateFormat && old.timeFormat === val.timeFormat)
			return;

		$(this.$el)['calendar']('destroy');
		this.setupUi();
	}

	buildOptions(options) {

		var format = (!this.format || this.format == 'default') ? this.$UI.$settings.dateFormat + ' ' + this.$UI.$settings.timeFormat : this.format

		Object.assign(options, {
			formatter: {
				datetime: (date, settings) => {
					return moment(date).format(format)
				}
			},
			parser: {
				datetime: (text, settings) => {
					return moment(text, format).toDate()

				}
			},

			monthFirst: !format.startsWith('DD')
		})


		return options;
	}
}