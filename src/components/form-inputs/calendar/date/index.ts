import * as Vue from 'vue'
import { Options, Prop, Watch } from 'vue-typed';
import { Calendar } from '../calendar';
import * as moment from 'moment'
import { _DateBase } from './_base';
import { IDate } from '../../../../../lib/interface'

@Options()
export class Date extends _DateBase implements IDate {

	target(): JQuery {
		return $(this.$el)
	}

	calendarOptions() {
		return {
			type: 'date',
			icon: 'calendar'
		};
	}

	@Watch('$UI.$settings.dateFormat')
	onSettingsChanged(val) {
		$(this.$el)['calendar']('destroy');
		this.setupUi();
	}

	buildOptions(options) {

		var format = (!this.format || this.format == 'default') ? this.$UI.$settings.dateFormat : this.format

		Object.assign(options, {
			formatter: {
				date: (date, settings) => {
					return moment(date).format(format)
				}
			},
			parser: {
				date: (text, settings) => {
					return moment(text, format).toDate()

				}
			},

			monthFirst: !format.startsWith('DD')
		})


		return options;
	}
}