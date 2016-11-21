import { Component } from 'vue-typed';
import { Base } from '../base'
import * as Vue from 'vue'

@Component({
	template: require('./index.html')
})
export class Modal extends Base  {
	show() {
		this.$ui.modal('#modal').show()
	}

	approved(e) {
		console.log('approved', e, this);

		alert('Yes! Approved!');
	}

	denied(e) {
		console.log('denied', e, this);
		
		alert('Oh no! Don\'t deny me please...');
		
		e.result= false;
		return false;
	}
}