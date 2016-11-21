import { Main } from './main';
import { ApiPage } from './api';
import * as dr from './demo/routes';

var r  = [
	{ text: 'Home', path: '/', component: Main },
	{ text: 'API', path: '/api/:component', component: ApiPage },
]

export var routes = r.concat(dr.routes);