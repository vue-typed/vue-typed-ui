import * as Vue from 'vue'

export function focus(instance, $this: Vue) {
	
	return function focus(element: string | HTMLElement | JQuery) {
		var target = $($this.$el).find(element as string)
		if (!target || !target.length) return 

		if (!target.is('input')) {
			target = target.find('> input')
		}

		target.focus()
	}
}