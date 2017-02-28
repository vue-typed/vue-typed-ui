import { Alert } from './';

export = {
	title: 'Alert',
	path: '/module/alert',
	component: Alert,
	source: require('!raw-loader!./index.ts'),
	api: ["module/alert"]
}