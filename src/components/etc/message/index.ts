import * as Vue from 'vue'
import { Options } from 'vue-typed'
import { _MessageBase } from './_base'

@Options({
	template: `
	<div class="ui message">
  	<i v-if="closable" class="close icon"></i>
		<div v-if="$slots.header && !icon" class="header">
  		<slot name="header"></slot>
		</div>
		<p v-if="!icon"><slot></slot></p>
		<i v-if="icon" :class="icon + ' icon'"></i>
		<div v-if="icon" class="content">
			<div v-if="$slots.header" class="header">
    		<slot name="header"></slot>
			</div>
    	<p><slot></slot></p>
  	</div>
	</div>
	`  })
export class Message extends _MessageBase {
	mounted() {

		let self = this

		if (this.icon) {
			$(this.$el).addClass('icon')
		}

		if (this.kind && this.kind !== 'default') {
			$(this.$el).addClass(this.kind)
		}

		if (this.closable) {
			$(this.$el).find('.close.icon')
				.on('click', function () {
					$(this)
						.closest('.message')
						.transition(self.transition)
				})
		}
	}
}
