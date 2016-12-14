import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { FieldBase } from '../../fields/field-base';
import { Util } from '../../../utils';
import { _DropdownBase } from './_base';


@Component()
export class Dropdown extends _DropdownBase {

	selectedItems = undefined

	createComponent(ch) {
		let css = 'ui selection dropdown ' + this.css
		return ch('div', { 'class': css }, [
			ch('input', { attrs: { type: 'hidden', name: this.name } }),
			ch('i', { 'class': 'dropdown icon' }),
			ch('div', { 'class': 'default text' }, this.placeholder),
			ch('div', { 'class': 'menu' }, this.$slots['default'])
		])
	}


	mounted() {

		var self = this;

		var el = this.$el.querySelector('.ui.dropdown')

		// search ?
		if (this.search === true) {
			$(el).addClass('search')
		}

		// multiple ?
		if (this.multiple === true) {
			$(el).addClass('multiple')
			this.selectedItems = [];
			if (this.value) {
				if (typeof this.value.length === "undefined")
					throw "v-model must be array for dropdown with multiple option!"
			} else {
				this.selectedItems = [];
			}
		} else {
			this.selectedItems = this.value;
		}

		// init semantic-ui dropdown
		this.sui({
			'onChange': function (arg) {
				if (!self.multiple) self.selectedItems = arg;
				self.$emit('input', self.selectedItems);
			},
			'onAdd': function (val) {
				self.selectedItems.push(val);
			},
			'onRemove': function (val) {
				self.selectedItems.splice(self.selectedItems.indexOf(val), 1);
			}
		});
		

		// make up data validate attr
		Util.setDataValidateAttr(this,$(this.$el).find('input'))

		// assign selected values
		this.valueChanged(this.value)

	}

	@Watch('value')
	valueChanged(val) {

		if (this.multiple === true && this.selectedItems.toString() != val.toString()) {
			this.sui('set exactly', val);
		} else
			this.sui('set selected', val);
	}

	sui(arg1?, arg2?) {
		return $(this.$el.querySelector('.ui.dropdown')).dropdown(arg1, arg2)
	}

	destroyed() {
		$(this.$el.querySelector('.ui.dropdown')).dropdown('destroy')
	}

}