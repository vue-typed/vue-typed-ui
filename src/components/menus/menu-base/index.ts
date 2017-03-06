import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../../utils';
import { _MenuBaseBase } from './_base';
import { IMenuBase } from '../../../../lib/interface';


@Component()
export class MenuBase extends _MenuBaseBase implements IMenuBase {

	@Prop()
	sidebar: any

	@Prop()
	sidebarToggle: any

	mounted() {

		if (this.sidebar) {
			var el = $(this.$el);

			if (this.sidebar == 'visible') {
				el.addClass('visible');
			}

			el.addClass('sidebar');

			// SINCE IT'S IMPOSSIBLE TO BIND EL TO <BODY> 
			// THEN USE PARENT EL OF SIDEBAR AS A CONTEXT		
			var sidebar = el.sidebar({
				context: el.parent()
			});

			if (this.sidebarToggle) {
				 sidebar.sidebar('attach events', this.sidebarToggle, 'toggle');
			}
		}

	}

}