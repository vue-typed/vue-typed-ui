import * as _ from 'lodash';
import { Modal } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Modal Standard',
	path: '/component/modal/standard',
	component: Modal,
	source: require('!raw-loader!./index.ts')
}, base)