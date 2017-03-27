import { Options, Watch } from 'vue-typed';
import { Util } from '../../../utils';
import { _DropdownBase } from './_base';
import { IDropdown } from '../../../../lib/interface';
import * as _ from 'lodash';


@Options()
export class Dropdown extends _DropdownBase implements IDropdown {

	selectedItems = undefined
	_htmlItems = ''

	target(): JQuery {
		return $(this.$el.querySelector('.ui.dropdown'))
	}

	createComponent(ch) {
		return ch('div', { 'class': 'ui selection dropdown' }, [
			ch('input', { attrs: { type: 'hidden', name: this.name } }),
			ch('i', { 'class': 'dropdown icon' }),
			ch('div', { 'class': 'default text' }, this.placeholder),
			ch('div', { 'class': 'menu', 'ref': 'menu' }, this.$slots['default'])
		])
	}

	beforeUpdate() {
		// store dropdown items state
		this._htmlItems = (this.$refs['menu'] as HTMLDivElement).innerHTML
	}

	updated() {
		// refresh dropdown when items has been changed
		if (this._htmlItems !== (this.$refs['menu'] as HTMLDivElement).innerHTML) {
			this.sui('refresh')
		}
	}


	mounted() {

		var self = this;

		var el = this.target()

		// search ?
		if (this.search === true) {
			el.addClass('search')
		}

		// multiple ?
		if (this.multiple === true) {
			el.addClass('multiple')
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


		let settings = _.merge({
			forceSelection: false,
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
		}, this.$UI.$settings.dropdown, this.settings || {})

		// init semantic-ui dropdown
		this.sui(settings);

		// manual force selection
		$(this.$el).find('input.search').on('blur', (e) => {
			let text = $(e.target).val()
			if (text) {
				text = text.trim().toUpperCase()
				let val = this.sui('get value')
				let foundFirstMatch = false
				$(this.$el).find('.menu').children('.item').each(function (i, el) {
					if (!foundFirstMatch && el.textContent.trim().toUpperCase().startsWith(text)) {
						val = $(el).data('value')
						foundFirstMatch = true
					}
				})

				this.sui('set selected', val)
				$(e.target).val('')
			}
		})

		// make up data validate attr
		Util.setDataValidateAttr(this, $(this.$el).find('input'))

		// assign selected values
		this.valueChanged(this.value)

		// set disabled state
		this.disabledChanged(this.disabled)

	}

	@Watch('disabled')
	disabledChanged(val) {
		let el = this.target()
		if (val)
			el.addClass('disabled')
		else
			el.removeClass('disabled')

		this.sui('refresh')
	}

	@Watch('value')
	valueChanged(val) {
		if (val === null || val === undefined) {
			this.sui('clear')
		} else {
			if (this.multiple === true && this.selectedItems.toString() != val.toString()) {
				this.sui('set exactly', val);
			} else
				this.sui('set selected', val);
		}
	}

	sui(arg1?, arg2?) {
		return this.target().dropdown(arg1, arg2)
	}

	destroyed() {
		this.target().dropdown('destroy')
	}

}