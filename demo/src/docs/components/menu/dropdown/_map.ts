import * as _ from 'lodash';
import { MenuDropdown } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Dropdown',
	path: '/component/menu/dropdown',
	component: MenuDropdown,
	source: require('!raw!./index.ts'),
	api: ["component/menu-dropdown"]
}, base)