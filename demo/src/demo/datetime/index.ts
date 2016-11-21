import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class DateTime extends Base  {
	dateTime: Date = new Date()

	get dateTimeString() {
		return this.dateTime.toLocaleDateString() + ' at ' + this.dateTime.toLocaleTimeString();
	}
}