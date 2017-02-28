import { MenuDropdown } from './';
import { base } from '../_map.base';
import { Util } from '../../../../init/utils';


export = Util.merge({
	title: 'Dropdown',
	path: '/component/menu/dropdown',
	component: MenuDropdown,
	source: require('!raw-loader!./index.ts'),
	api: ["component/menu-dropdown"]
}, base)