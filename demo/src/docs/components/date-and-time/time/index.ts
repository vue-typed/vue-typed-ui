import { Options } from 'vue-typed';

@Options({
	template: require('./view.pug')()
})
export class Time {
	time: Date = new Date()

	get timeString() {
		return this.time.toLocaleDateString() + ' at ' + this.time.toLocaleTimeString();
	}
}