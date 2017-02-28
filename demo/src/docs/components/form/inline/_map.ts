import * as _ from 'lodash';
import { FormInline } from './';
import { base } from '../_map.base';

export = _.defaults({
	title: 'Form Inline',
	path: '/component/form/inline',
	component: FormInline,
	source: require('!raw-loader!./index.ts')
}, base)