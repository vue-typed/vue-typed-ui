import { Component } from 'vue-typed';
import { Base } from '../../base'

@Component({
	template: require('./index.html')
})
export class MenuHorizontal extends Base  {
	clicked() {
		alert('Home clicked!')
	}
}