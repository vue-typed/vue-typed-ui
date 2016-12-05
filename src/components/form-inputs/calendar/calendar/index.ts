import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { FieldBase } from '../../../fields/field-base';
import { Util } from '../../../../utils';
import { _CalendarBase } from './_base';


@Component()
export abstract class Calendar extends _CalendarBase {

	abstract calendarOptions() : {
		icon: string,
		type: string
	}

	createComponent(ch) {

		let attr = this.calendarOptions()

		let children = [
			ch('i', { attrs: { 'class': attr.icon + ' icon' } }),
			ch('input', { attrs: { type: 'text', name: this.name, placeholder: this.placeholder, } })
		]

		let css = 'ui input left icon'

		if (this.canClear) {
			css += ' action'
			children.push(ch('div', {
				attrs: { 'class': 'ui icon button', 'type': 'button' },
				on: {
					'click': () => {
						$(this.$el)['calendar']('clear')
					}
				}
			}, [ch('i', { attrs: { 'class': 'close icon' } })]))
		}

		return ch('div', { attrs: { 'class': 'ui calendar' } },
			[
				ch('div', { attrs: { 'class': css } }, children)
			]);

	}

	mounted() {
		this.setupUi()
		Util.setDataValidateAttr(this, $(this.$el).find('input'))
	}

	@Watch('value')
	onValueChanged(val, old) {
		if ($(this.$el).data('date') !== val)
			$(this.$el)['calendar']('set date', val, true, false)
	}

	setupUi() {

		let attr = this.calendarOptions()

		var sender = this
		var options = {
			type: attr.type,
			onChange: (date, text) => {
				this.$emit('input', date);
			}
		}

		if (this.rangeStart) {
			Object.assign(options, {
				startCalendar: this.rangeStart
			})
		}

		if (this.rangeEnd) {
			Object.assign(options, {
				endCalendar: this.rangeEnd
			})
		}

		if (this.canClear) {

		}

		$(this.$el)['calendar'](this.buildOptions(options))['calendar']('set date', this.value, true, false);

	}

	protected buildOptions(options) {
		return options;
	}

	destroyed() {
		$(this.$el)['calendar']('destroy')
	}


}