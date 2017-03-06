import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _MenuItemBase } from './_base';
import { IMenuItem } from '../../../../lib/interface';


@Component()
export class MenuItem extends _MenuItemBase implements IMenuItem {

	target(): JQuery {
		return $(this.$el)
	}

	render(createElement) {

		var contents = [];

		if (this.icon) {
			var icons = this.icon;
			if (icons.split(' ').indexOf('icon') < 0)
				icons += ' icon';

			contents.push(createElement('i', {
				'class': icons
			}))
		}
		contents.push(this.content || this.$slots['default']);

		var tag = 'a'
		var opts = {
			'class': 'item',
			on: {
				'click': () => { this.$emit('click') }
			}
		}

		// vue-router attrs
		if (this.to) {
			if (this.$router && !this.preventRouter) {
				tag = 'router-link';
				opts['props'] = {
					to: this.to,
					exact: true
				};
			} else {
				opts['href'] = this.to
			}
		}

		var el = createElement(tag, opts, contents);

		return el;

	}
}