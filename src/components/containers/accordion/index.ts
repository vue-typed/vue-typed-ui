import { _AccordionBase, _AccordionEvents } from './_base';
import { Options } from 'vue-typed';
import { IAccordion } from '../../../../lib/interface';

@Options({
	template: '<div class="ui accordion"><slot></slot></div>'
})
export class Accordion extends _AccordionBase implements IAccordion { 

	target() : JQuery {
		return $(this.$el)
	}

	mounted() {
		let self = this
		this.target().accordion({
			exclusive: this.exclusive,
			on: this.on,
			animateChildren: this.animateChildren,
			closeNested: this.closeNested,
			collapsible: this.collapsible,
			duration: this.duration,
			onOpening: function(){
				self.$emit(_AccordionEvents.opening, this)
			},
			onOpen: function(){
				self.$emit(_AccordionEvents.open, this)
			},
			onClosing: function(){
				self.$emit(_AccordionEvents.closing, this)
			},
			onClose: function(){
				self.$emit(_AccordionEvents.close, this)
			},
			onChange: function(){
				self.$emit(_AccordionEvents.change, this)
			},
		})
	}
}