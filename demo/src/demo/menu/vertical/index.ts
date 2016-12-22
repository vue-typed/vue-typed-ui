import { Component } from 'vue-typed';
import { Base } from '../../base'

@Component({
	template: require('./index.html')
})
export class MenuVertical extends Base  {
	clicked() {
		alert('Home clicked!')
	}
}