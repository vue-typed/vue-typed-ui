import { Currency } from './';

export = {
	title: 'Currency',
	path: '/component/currency',
	component: Currency,
	source: require('!raw-loader!./index.ts'),
	api: ["component/currency"]
}