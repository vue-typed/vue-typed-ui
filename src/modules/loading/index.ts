import * as Vue from 'vue'

export function loading(instance, $this: Vue) {
	
	return function loading(element: string | HTMLElement | JQuery, auto: boolean = true) {
		var target = $($this.$el).find(element as string)
		if (!target || !target.length) return 

		var module = {
			start() {
				target.addClass('loading')
			},
			stop() {
				target.removeClass('loading')
			}
		};

		if (auto)
			module.start()

		return module;
	}
}