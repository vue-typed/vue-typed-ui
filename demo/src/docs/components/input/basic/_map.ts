import * as _ from 'lodash';
import { InputBasic } from './';
import { base } from '../_map.base';

export = _.defaults({
	title: 'Basic',
	path: '/component/input/basic',
	component: InputBasic,
	source: require('!raw-loader!./index.ts')
}, base)