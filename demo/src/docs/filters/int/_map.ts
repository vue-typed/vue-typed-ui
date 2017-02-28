import { Int } from './';

export = {
	title: 'Int',
	path: '/filter/int',
	component: Int,
	source: require('!raw-loader!./index.ts'),
	api: ["filter/int"]
}