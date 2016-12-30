import { Component } from 'vue-typed';
import { Base } from '../../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class ModalMultiple extends Base  {
	showSecondModal() {
		this.$ui.modal('#second-modal').show()
	}
}