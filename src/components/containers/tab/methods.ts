import * as Vue from 'vue'
import { Tab } from '../../../../lib/methods'

export function tab(instance, $this: Vue) {
	return function (element: string | HTMLElement | JQuery): Tab {
		return {
			changeTab(path: string) {  return $(element).tab('change tab', path);  }
		}
	}
}