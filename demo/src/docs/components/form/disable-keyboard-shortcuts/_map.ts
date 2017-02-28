import * as _ from 'lodash';
import { FormDisableKeyboardShortcuts } from './';
import { base } from '../_map.base';

export = _.defaults({
	title: 'Form Disable Keyboard Shortcuts',
	path: '/component/form/disable-shortcuts',
	component: FormDisableKeyboardShortcuts,
	source: require('!raw-loader!./index.ts')
}, base)