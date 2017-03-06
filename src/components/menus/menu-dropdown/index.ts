import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _MenuDropdownBase } from './_base';
import { IMenuDropdown } from '../../../../lib/interface';


@Component({
	template: `<div class="ui dropdown item">
    {{label}}
    <i :class="icon + ' icon'"></i>
    <div class="menu">
			<slot></slot>
    </div>
  </div>`
})
export class MenuDropdown extends _MenuDropdownBase implements IMenuDropdown {

	target(): JQuery {
		return $(this.$el)
	}

	mounted() {
		var opt = <SemanticUI.Dropdown.Settings>{}
		if (this.hover) {
			opt.on = 'hover'
		}

		$(this.$el).dropdown(opt)
	}

	destroyed() {
		$(this.$el).dropdown('destroy')
	}
}