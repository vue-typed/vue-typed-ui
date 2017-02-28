import * as _ from 'lodash';
import { TabInteractive } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Interactive',
	path: '/component/tab/interactive',
	component: TabInteractive,
	source: require('!raw-loader!./index.ts')
}, base)