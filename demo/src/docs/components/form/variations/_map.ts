import * as _ from 'lodash';
import { FormVariations } from './';
import { base } from '../_map.base';

export = _.defaults({
	title: 'Form Variations',
	path: '/component/form/variations',
	component: FormVariations,
	source: require('!raw-loader!./index.ts')
}, base)