import * as _ from 'lodash';
import { InputIcon } from './';
import { base } from '../_map.base';

export = _.defaults({
	title: 'Icon',
	path: '/component/input/icon',
	component: InputIcon,
	source: require('!raw-loader!./index.ts')
}, base)