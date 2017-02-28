import { Toastr } from './';

export = {
	title: 'Toastr',
	path: '/module/toastr',
	component: Toastr,
	source: require('!raw-loader!./index.ts'),
	api: ["module/toastr"]
}