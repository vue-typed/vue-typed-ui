import { DateTime } from './';
import { base } from '../_map.base';
import * as _ from 'lodash'

export = _.defaults({
	title: 'DateTime',
	path: '/component/date-time/datetime',
	component: DateTime,
	source: require('!raw-loader!./index.ts'),
	api: ["component/datetime"]
}, base)