import { Options } from 'vue-typed';

@Options({
	template: require('./view.pug')()
})
export class MenuHorizontal {
	clicked() {
		alert('Home clicked!')
	}
}