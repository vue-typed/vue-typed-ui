import { Options } from 'vue-typed';

@Options({
	template: require('./view.pug')()
})
export class MenuVertical  {
	clicked() {
		alert('Home clicked!')
	}
}