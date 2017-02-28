import * as _ from 'lodash';
import { FormComponentBasic } from './';
import { base } from '../_map.base';


export = _.extend({
	title: 'Basic',
	path: '/decorator/form/basic',
	html: require('./view.pug')(),
	component: FormComponentBasic,
	source: require('!raw-loader!./index.ts')
}, base)