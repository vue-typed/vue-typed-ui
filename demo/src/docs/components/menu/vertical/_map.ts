import * as _ from 'lodash';
import { MenuVertical } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Vertical',
	path: '/component/menu/vertical',
	component: MenuVertical,
	source: require('!raw!./index.ts'),
	api: ["component/menu-vertical"]
}, base)