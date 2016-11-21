import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { FieldBase } from '../../../fields/field-base';
import { Util } from '../../../../utils';
import { _CalendarBase } from './_base';


@Component()
export abstract class Calendar extends _CalendarBase {
	
	abstract type
	abstract icon

	createComponent(ch) {

		return ch('div', { attrs: { 'class': 'ui calendar' } },
			[
				ch('div', { attrs: { 'class': 'ui input left icon' } },
					[
						ch('i', { attrs: { 'class': this.icon + ' icon' } }),
						ch('input', { attrs: { type: 'text', name: this.name, placeholder: this.placeholder, } })
					])
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

		var sender = this
		var options = {
			type: this.type,
			onChange: (date, text) => {
				this.$emit('input', date);
			}
		}

		if (this.rangeStart){
			Object.assign(options, {
				startCalendar: this.rangeStart
			})
		}

		if (this.rangeEnd){
			Object.assign(options, {
				endCalendar: this.rangeEnd
			})
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