import { Component } from 'vue-typed';
import { Base } from '../base'

@Component({
	template: require('./index.html')
})
export class Loading extends Base  {

	loading = undefined

	start() {
		this.loading = this.$ui.loading('#segment-1')
	}

	stop() {
		if (this.loading) this.loading.stop()
	}
}