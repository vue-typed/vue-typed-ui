import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Button extends Virtual<Vue>() {

	status: string = 'Click some buttons test Aha'
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
		this.$ui.button('btn-loading').loading(true)
		setTimeout(() => {
			this.$ui.button('btn-loading').loading(false)
		}, 1500);
	}

}
