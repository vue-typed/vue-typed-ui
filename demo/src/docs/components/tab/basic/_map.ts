import * as _ from 'lodash';
import { TabBasic } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Basic',
	path: '/component/tab/basic',
	component: TabBasic,
	source: require('!raw-loader!./index.ts')
}, base)