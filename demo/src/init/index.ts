import { modules } from './modules';
import { Format } from './formatter';
import { Util } from './utils';
import { GlobalState } from './state';
import { DemoPage } from '../demo-page';
import * as Vue from 'vue';

// This 'reset' required by Webpack HMR
if (module.hot && module.hot.data) {
	GlobalState.reset()
}

const routes = []

modules.forEach((m) => {

	let htmlSource = m.html || m.component.template
	let html = Format.html(htmlSource);
	let js = Format.js(Util.jsToString(m.component));
	let ts = Format.ts(m.source);

	routes.push({
		path: m.path,
		component: Vue.extend({
			mixins: [DemoPage, {
				components: {
					'app-example': m.component
				}
			}]
		})
	});

	GlobalState.menus.push({
		kind: m.kind,
		path: '/doc' + m.path,
		title: m.title,
		group: m.group
	});

	GlobalState.viewSoureMap['/doc' + m.path] = {
		kind: Util.upperFirst(m.kind),
		group: m.group,
		title: m.title,
		ts: ts,
		html: html,
		js: js,
		api: m.api
	};
});


import * as VueRouter from 'vue-router';
import { Options } from 'vue-typed';
import { App } from '../app/index';
import { createRouter } from './router';
import { ViewSource } from './view-source';

// register global components
Vue.component('ui-source', ViewSource)

@Options({
	// el: '#app',
	router: createRouter(routes),
	template: '<transition name="fade" mode="out-in"><router-view/></transition>'
})
export class Main {
}