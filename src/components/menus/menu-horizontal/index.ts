import { _MenuHorizontalBase } from './_base';
import { Component } from 'vue-typed';

@Component({
	template: '<div class="ui menu"><slot></slot></div>'
})
export class MenuHorizontal extends _MenuHorizontalBase {

	// render(ch) {

	// 	var children = [ this.$slots['default'] ]

	// 	if (this.$slots['right']) {
	// 		var contents = []

	// 		for (var vnode in this.$slots['right']) {
	// 			contents.push(ch('div', { 'class': 'item' }, [this.$slots['right'][vnode]]))
	// 		}

	// 		var rightMenu = ch('div', {
	// 			'class': 'right menu'
	// 		}, this.$slots['right']['children'])
	// 		children.push(contents)
	// 	}

	// 	return ch('div', { 'class': 'ui menu' }, children);

	// }

}