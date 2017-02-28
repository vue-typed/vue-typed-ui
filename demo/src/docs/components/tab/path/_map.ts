import * as _ from 'lodash';
import { TabPath } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Path',
	path: '/component/tab/path',
	component: TabPath,
	source: require('!raw-loader!./index.ts')
}, base)