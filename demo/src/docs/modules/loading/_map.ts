import { Loading } from './';

export = {
	title: 'Loading',
	path: '/module/loading',
	component: Loading,
	source: require('!raw-loader!./index.ts'),
	api: ["module/loading"]
}