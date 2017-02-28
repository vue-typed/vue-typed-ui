import { Util } from '../../../../init/utils';
import { MenuVertical } from './';
import { base } from '../_map.base';


export = Util.merge({
	title: 'Vertical',
	path: '/component/menu/vertical',
	component: MenuVertical,
	source: require('!raw-loader!./index.ts'),
	api: ["component/menu-vertical"]
}, base)