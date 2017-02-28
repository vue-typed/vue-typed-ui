import { DateDemo } from './';
import { base } from '../_map.base';
import * as _ from 'lodash'

export = _.defaults({
	title: 'Date',
	path: '/component/date-time/date',
	component: DateDemo,
	source: require('!raw-loader!./index.ts'),
	api: ["component/date"]
}, base)