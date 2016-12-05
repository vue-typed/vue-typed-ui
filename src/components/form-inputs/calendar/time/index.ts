import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { Calendar } from '../calendar';
import * as moment from 'moment'
import { _TimeBase } from './_base';


@Component()
export class Time extends _TimeBase {

	calendarOptions() {
		return {
			type: 'time',
			icon: 'time'
		};
	}

	@Watch('$UI.$settings.timeFormat')
	onSettingsChanged(val) {
		$(this.$el)['calendar']('destroy');
		this.setupUi();
	}

	buildOptions(options) {

		var format = (!this.format || this.format == 'default') ? this.$UI.$settings.timeFormat : this.format

		Object.assign(options, {
			formatter: {
				time: (time, settings) => {
					return moment(time).format(format)
				}
			},
			parser: {
				time: (text, settings) => {
					return moment(text, format).toDate()

				}
			},
			monthFirst: !format.startsWith('DD')
		})

		return options;
	}
}