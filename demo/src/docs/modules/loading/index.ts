import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Loading extends Virtual<Vue>()  {

	loading = undefined

	start() {
		this.loading = this.$ui.loading('#segment-1')
	}

	stop() {
		if (this.loading) this.loading.stop()
	}
}