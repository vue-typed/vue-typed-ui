import { Accordion } from './';

export = {
	title: 'Accordion',
	path: '/component/accordion',
	component: Accordion,
	source: require('!raw-loader!./index.ts'),
	api: ["component/accordion", "component/accordion-item"]
}