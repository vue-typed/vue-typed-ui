import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Time extends Base  {
	time: Date = new Date()

	get timeString() {
		return this.time.toLocaleDateString() + ' at ' + this.time.toLocaleTimeString();
	}
}