import { Modal } from '../../../lib/methods'

export function modal(instance) {
	return function (element: string | HTMLElement | JQuery): Modal {
		return {
			show() { return $(element).modal('show') },
			hide() { return $(element).modal('hide') },
			toggle()  { return $(element).modal('toggle') },
			refresh()  { return $(element).modal('refresh') }	
		}
	}
}