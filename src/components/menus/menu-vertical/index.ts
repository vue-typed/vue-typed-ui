import { _MenuVerticalBase } from './_base';
import { Component } from 'vue-typed';
import { IMenuVertical } from '../../../../lib/interface';

@Component({
	template: '<div class="ui vertical menu"><slot></slot></div>',
})
export class MenuVertical extends _MenuVerticalBase implements IMenuVertical {

	target(): JQuery {
		return $(this.$el)
	}

}