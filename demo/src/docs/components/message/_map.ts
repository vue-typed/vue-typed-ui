import { Message } from './';

export = {
	title: 'Message',
	path: '/component/message',
	component: Message,
	source: require('!raw-loader!./index.ts'),
	api: ["component/message"]
}