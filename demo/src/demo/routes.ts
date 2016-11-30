import { FormBasic } from './form/basic';
import { FormAdvanced } from './form/form-component';
import { Input } from './input';
import { Numeric } from './numeric';
import { Currency } from './currency';
import { TabBasic } from './tab/basic';
import { TabInteractive } from './tab/interactive';
import { Button } from './button';
import { Radio } from './radio';
import { Checkbox } from './checkbox';
import { Dropdown } from './dropdown';
import { DateDemo } from './date';
import { Time } from './time';
import { DateTime } from './datetime';
import { Modal } from './modal';
import { Tree } from './tree';
import { Menu } from './menu';
import { Message } from './message';
import { Alert } from './alert';
import { Toastr } from './toastr';


// Main routes builder
const m = [
	{ text: 'Form Basic', path: 'form/basic', component: FormBasic },
	{ text: 'Form Component', path: 'form/form-component', component: FormAdvanced },
	{ text: 'Input', path: 'input', component: Input },
	{ text: 'Numeric', path: 'numeric', component: Numeric },
	{ text: 'Currency', path: 'currency', component: Currency },
	{ text: 'Date', path: 'date', component: DateDemo },
	{ text: 'Time', path: 'time', component: Time },
	{ text: 'DateTime', path: 'datetime', component: DateTime },
	{ text: 'Tab', path: 'tab/basic', component: TabBasic },
	{ text: 'Tab Interactive', path: 'tab/interactive', component: TabInteractive },
	{ text: 'Buttons', path: 'button', component: Button },
	{ text: 'Radio', path: 'radio', component: Radio },
	{ text: 'Checkbox', path: 'checkbox', component: Checkbox },
	{ text: 'Dropdown', path: 'dropdown', component: Dropdown },
	{ text: 'Modal', path: 'modal', component: Modal },
	{ text: 'Tree', path: 'tree', component: Tree },
	{ text: 'Menu', path: 'menu', component: Menu },
	{ text: 'Message', path: 'message', component: Message },
	{ text: 'Alert', path: 'alert', component: Alert },
	{ text: 'Toastr', path: 'toastr', component: Toastr }
]

// Build router routes
export const routes = m.map((m) => {
	return {
		text: m.text,
		path: _path(m.path),
		component: m.component
	}
});

// Build typescript source map
var _srcs = {};
m.forEach((m)=>{
	_srcs[_path(m.path)] = {
		title: m.text,
		source: m['source'] || _src(m.path),
		html: _html(m.path)
	};
});
export const sources = _srcs;


/**
 * Fix path
 * 
 * @param {string} p
 * @returns {string}
 */
function _path(p: string) : string {
	return '/demo/' + p;
}

/**
 * Get real typescript demo source code
 * 
 * @param {string} src
 * @returns {string}
 */
function _src(src: string): string {
	var script = require('!raw!./' + src + '/index.ts')
	var raw = script.replace( /import\s*\{\s*(Base)\s*\}\s*from\s*\'(.*?)[\r\n]/gm, '');
	raw = raw.replace(/extends\s*(Base)/gm, 'extends Vue');
	raw = raw.replace(/..\/..\/..\/..\/..\/src\/index/gm, 'vue-typed-ui')	
	raw = raw.replace(/^\s*\r\n/gm, '\r');
	raw = raw.replace(/^\s*\n/gm, '');

	return  raw
}

function _html(src: string) {
	return require('!raw!./' + src + '/index.html')
}