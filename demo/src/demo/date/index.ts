import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class DateDemo extends Base  {
	dueDate: Date = new Date()
	startDate: Date = new Date()
	endDate: Date = new Date()

	optionalDate?: Date = new Date()

	get dueDateString() {
		return this.dueDate.toLocaleDateString() + ' at ' + this.dueDate.toLocaleTimeString();
	}
}