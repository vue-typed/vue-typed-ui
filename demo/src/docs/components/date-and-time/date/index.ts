import { Options } from 'vue-typed';

@Options({
	template: require('./view.pug')()
})
export class DateDemo {
	dueDate: Date = new Date()
	startDate: Date = new Date()
	endDate: Date = new Date()

	optionalDate?: Date = new Date()

	get dueDateString() {
		return this.dueDate.toLocaleDateString() + ' at ' + this.dueDate.toLocaleTimeString();
	}
}