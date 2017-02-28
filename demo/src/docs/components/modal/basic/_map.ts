import * as _ from 'lodash';
import { ModalBasic } from './';
import { base } from '../_map.base';


export = _.defaults({
	title: 'Modal Basic',
	path: '/component/modal/basic',
	component: ModalBasic,
	source: require('!raw-loader!./index.ts')
}, base)