import * as Vue from 'vue'
import { Button } from '../../../../lib/methods'

export function button(instance, $this: Vue) {
	return function (element: string | HTMLElement | JQuery): Button {
		return {
			loading(state) {
				if (state) 
					return $(element).addClass('loading')
				
				return $(element).removeClass('loading')
			},
		}
	}
}