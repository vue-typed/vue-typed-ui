import * as _ from 'lodash';
import { FormBasic } from './';
import { base } from '../_map.base';

export = _.defaults({
	title: 'Form Basic',
	path: '/component/form/basic',
	component: FormBasic,
	source: require('!raw-loader!./index.ts')
}, base)