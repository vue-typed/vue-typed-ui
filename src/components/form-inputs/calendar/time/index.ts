import * as Vue from 'vue'
import { Options, Prop, Watch } from 'vue-typed';
import { Calendar } from '../calendar';
import * as moment from 'moment'
import { _TimeBase } from './_base';
import { ITime } from '../../../../../lib/interface'


@Options()
export class Time extends _TimeBase implements ITime {

	target(): JQuery {
		return $(this.$el)
	}

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