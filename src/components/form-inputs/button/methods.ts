import { Button } from '../../../../lib/methods'

export function button(instance) {
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