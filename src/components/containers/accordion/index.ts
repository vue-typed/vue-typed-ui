import { _AccordionBase } from './_base';
import { Options } from 'vue-typed';

@Options({
	template: '<div class="ui accordion"><slot></slot></div>'
})
export class Accordion extends _AccordionBase { 
	mounted() {
		let self = this
		$(this.$el).accordion({
			exclusive: this.exclusive,
			on: this.on,
			animateChildren: this.animateChildren,
			closeNested: this.closeNested,
			collapsible: this.collapsible,
			duration: this.duration,
			onOpening: function(){
				self.$emit('opening', this)
			},
			onOpen: function(){
				self.$emit('open', this)
			},
			onClosing: function(){
				self.$emit('closing', this)
			},
			onClose: function(){
				self.$emit('close', this)
			},
			onChange: function(){
				self.$emit('change', this)
			},
		})
	}
}