import { Component, Prop } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Button extends Base {

	status: string = 'Click some buttons!'
	counter: number = 0;
	disabled: boolean = true

	setDisable() {
		alert('I disable my self')
		this.disabled = true
	}

	updateStatus(status) {
		this.counter++;
		this.status = status + ' ' + this.counter + ' times';
	}

	loading() {
		this.$ui.button('#btn-loading').loading(true)
		setTimeout(() => {
			this.$ui.button('#btn-loading').loading(false)
		}, 1500);
	}

}
