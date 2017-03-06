import * as Vue from 'vue'
import { Component, Prop, Watch } from 'vue-typed';
import { Util } from '../../../utils';
import { _CheckboxBase } from './_base';
import { ICheckbox } from '../../../../lib/interface';


@Component({
	template: `
	<div class="inline field">
    <div :class="css">
      <input type="checkbox" class="hidden" :checked="checked" :value="checkedValue">
      <label><slot></slot></label>
    </div>
  </div>
	`
})
export class Checkbox extends _CheckboxBase implements ICheckbox {

	target(): JQuery {
		return $(this.$el).find('.ui.checkbox')
	}

	get checkedValue() {
		return this.val || true
	}

	css: string = "ui checkbox"

	checked: boolean = false

	_isArray: boolean = false


	@Watch('value', true)
	valueChanged(val) {

		if (this._isArray) {
			this.checked = val.indexOf(this.val) > -1;
		} else {
			this.checked = val !== false;
		}

	}

	@Watch('enabled')
	enabledChanged(val) {
		this.sui('set ' + (val !== false ? 'enabled' : 'disabled'));
	}

	mounted() {

		var name = this.name;
		var self = this;
		var ready = false;
		this._isArray = this.value && typeof this.value === 'object' && this.value['length'] !== undefined;


		this._updateCss();

		var target = $(this.$el).find('input')
			.attr('name', name)
			.on('change', function (e) {
				if (!ready) return;
				var checkedValue = e.target['checked'] ? e.target['value'] : false;

				if (self._isArray) {
					// value change emitted automatically on modified array value
					if (checkedValue) {
						self.value.push(e.target['value']);
					} else {
						self.value.splice(self.value.indexOf(e.target['value']), 1)
					}					
				} else {
					// manually emit
					self.$emit('input', checkedValue);
				}
			});

		Util.setDataValidateAttr(this, target)

		Vue.nextTick(() => {
			if (this._isArray) {
				this.checked = this.value.indexOf(this.val) > -1;
			} else {
				this.checked = this.val === this.value || this.value === true || this.value === 'true';
			}
			this.enabledChanged(this.enabled);
			this.sui(this.checked ? 'check' : 'uncheck');
			ready = true;
		});

	}

	sui(arg1?, arg2?) {
		return this.target().checkbox(arg1, arg2);
	}

	_updateCss() {
		this.css = "ui checkbox";
		if (this.kind) {
			this.css += ' ' + this.kind;
		}
	}

	destroyed() {		
		$(this.$el).find('.ui.checkbox').checkbox('destroy')
	}
}