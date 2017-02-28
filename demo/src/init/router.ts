import * as Vue from 'vue'
import VueRouter from 'vue-router';
import { App } from '../app';
import { AppHome } from '../home';
import { AppDocHome } from '../docs/home';


// let demoRoutes = GlobalState.routes
export function createRouter(demoRoutes: any[]): VueRouter {
	demoRoutes.forEach((r) => {
		r.path = '/doc' + r.path
	})

	demoRoutes.push({
		path: '',
		component: AppDocHome
	})

	let routes = [].concat({
		path: '',
		component: AppHome
	}, {
			path: '/doc',
			component: App,
			children: demoRoutes
		})

	return new VueRouter({ routes });
}