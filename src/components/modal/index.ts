import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { Util } from '../../utils';
import * as _ from 'lodash'
import { _ModalBase } from './_base';


@Component({
	template: `<div class="ui modal">
  <i v-if="closable" class="close icon"></i>
  <div class="header" v-if="hasHeader">
    <slot name="header"></slot>
  </div>
  <div class="content">
    <slot></slot>
  </div>
  <div class="actions" v-if="hasActions">
		<slot name="actions"></slot>
  </div>
</div>`})
export class Modal extends _ModalBase implements SemanticUI.Modal.Settings {

	get hasActions() {
		return this.$slots['actions'] != undefined;
	}

	get hasHeader() {
		return this.$slots['header'] != undefined;
	}

	mounted() {

		var self = this;

		let emit = function (fn) {
			return function (sender) {
				let e = { sender: sender, context: this, result: true }
				self.$emit(fn, e)
				return e.result;
			}
		} as Function		

		$(this.$el).modal({
			onDeny: emit('deny'),
			onApprove: emit('approve'),
			onShow: emit('show'),
			onHide: emit('hide'),
			onHidden: emit('hidden'),
			onVisible: emit('visible'),
			closable: this.closable,
			transition: this.transition,
			allowMultiple: this.allowMultiple,
			autofocus: this.autofocus
		})

		if (this.attachShow) $(this.$el).modal('attach events', this.attachShow, 'show')
		if (this.attachHide) $(this.$el).modal('attach events', this.attachHide, 'hide')
		if (this.attachToggle) $(this.$el).modal('attach events', this.attachToggle, 'toggle')
		if (this.attachRefresh) $(this.$el).modal('attach events', this.attachRefresh, 'refresh')



	}

	destroyed() {
		$(this.$el).modal('destroy')
	}

}