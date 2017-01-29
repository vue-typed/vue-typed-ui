import { Message } from './';

export = {
	title: 'Message',
	path: '/component/message',
	component: Message,
	source: require('!raw!./index.ts'),
	api: ["component/message"]
}