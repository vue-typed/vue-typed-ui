import { _MenuHorizontalBase } from './_base';
import { Component } from 'vue-typed';
import { IMenuHorizontal } from '../../../../lib/interface';

@Component({
	template: '<div class="ui menu"><slot></slot></div>'
})
export class MenuHorizontal extends _MenuHorizontalBase implements IMenuHorizontal {

	target(): JQuery {
		return $(this.$el)
	}

}