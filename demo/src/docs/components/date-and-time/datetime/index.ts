import { Options } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class DateTime {
	dateTime: Date = new Date()

	get dateTimeString() {
		return this.dateTime.toLocaleDateString() + ' at ' + this.dateTime.toLocaleTimeString();
	}
}