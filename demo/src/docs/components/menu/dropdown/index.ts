import { Options } from 'vue-typed';

@Options({
	template: require('./view.pug')()
})
export class MenuDropdown {
	clicked() {
		alert('Home clicked!')
	}
}