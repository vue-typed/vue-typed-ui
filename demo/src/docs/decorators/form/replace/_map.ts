import * as _ from 'lodash';
import { FormComponentReplace } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Replace Parent',
	path: '/decorator/form/replace',
	html: require('./view.pug')(),
	component: FormComponentReplace,
	source: require('!raw-loader!./index.ts')
}, base)