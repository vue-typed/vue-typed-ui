import { Time } from './';
import { base } from '../_map.base';
import * as _ from 'lodash'

export = _.defaults({
	title: 'Time',
	path: '/component/date-time/time',
	component: Time,
	source: require('!raw-loader!./index.ts'),
	api: ["component/time"]
}, base)