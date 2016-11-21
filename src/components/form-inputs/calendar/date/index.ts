import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { Calendar } from '../calendar';
import * as moment from 'moment'
import { _DateBase } from './_base';


@Component()
export class Date extends _DateBase {

	type = 'date'
	icon = 'calendar'

	@Watch('$ui.$settings.dateFormat')
	onSettingsChanged(val) {
		$(this.$el)['calendar']('destroy');
		this.setupUi();
	}

	buildOptions(options) {

		var format = (!this.format || this.format == 'default') ? this.$ui.$settings.dateFormat : this.format

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