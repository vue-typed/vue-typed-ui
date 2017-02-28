import * as Vue from 'vue'
import * as VueTypedUI from '../../src/index';
import VueRouter from 'vue-router';
import { AppSettingStore } from './settings';

Vue.use(VueRouter)
Vue.use(VueTypedUI, {
	prefix: 'ui',
	settings: AppSettingStore.get()
})

require('./style/index.less')

if (module.hot) {
	module.hot.accept()

	if (!module.hot.data) {

		console.log('[VueTypedUI] init HMR');
		hmrAppMount()

	} else {

		console.log('[VueTypedUI] HMR Reload');

		// destroy and remove old app
		let vm = window['____vt_hmr____'] as Vue		
		vm.$el.remove()
		vm.$destroy()

		// create new placeholder
		var div = document.createElement('div')
		div.setAttribute('id', 'app')
		document.getElementsByTagName('body')[0].appendChild(div)
		vm = hmrAppMount()

	}
} else {

	appMount()

}

function hmrAppMount() {
	return window['____vt_hmr____'] = appMount();
}

function appMount() {
	return new Vue(require('./init').Main).$mount('#app')
}