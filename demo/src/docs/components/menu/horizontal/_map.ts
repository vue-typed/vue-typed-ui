import { Util } from '../../../../init/utils';
import { MenuHorizontal } from './';
import { base } from '../_map.base';


export = Util.merge({
	title: 'Horizontal',
	path: '/component/menu/horizontal',
	component: MenuHorizontal,
	source: require('!raw-loader!./index.ts'),
	api: ["component/menu-horizontal"]
}, base)