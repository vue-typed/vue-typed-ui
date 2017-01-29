import * as _ from 'lodash';
import { MenuHorizontal } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Horizontal',
	path: '/component/menu/horizontal',
	component: MenuHorizontal,
	source: require('!raw!./index.ts'),
	api: ["component/menu-horizontal"]
}, base)