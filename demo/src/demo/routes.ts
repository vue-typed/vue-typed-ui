import { FormBasic } from './form/basic';
import { FormInline } from './form/inline';
import { FormVariations } from './form/variations';
import { FormDisableKeyboardShortcuts } from './form/disable-keyboard-shortcuts';
import { FormComponentBasic } from './form-component/basic';
import { FormComponentReplace } from './form-component/replace';
import { InputBasic } from './input/basic';
import { InputIcon } from './input/icon';
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
import { Focus } from './focus';
import { Int } from './filters/int';


// Main routes builder
const m = [
	{ group: 'component/form', text: 'Form Basic', path: 'form/basic', component: FormBasic },
	{ group: 'component/form', text: 'Inline Form', path: 'form/inline', component: FormInline },
	{ group: 'component/form', text: 'Variations', path: 'form/variations', component: FormVariations },
	{ group: 'component/form', text: 'Disable Keyboard Shortcuts', path: 'form/disable-keyboard-shortcuts', component: FormDisableKeyboardShortcuts },
	{ group: 'decorator/form', text: 'Basic', path: 'form-component/basic', component: FormComponentBasic },
	{ group: 'decorator/form', text: 'Replace', path: 'form-component/replace', component: FormComponentReplace },	
	{ group: 'component/input', text: 'Basic Input', path: 'input/basic', component: InputBasic },
	{ group: 'component/input', text: 'Input With Icon', path: 'input/icon', component: InputIcon },	
	{ group: 'component/numeric', text: 'Numeric', path: 'numeric', component: Numeric },
	{ group: 'component/currency', text: 'Currency', path: 'currency', component: Currency },
	{ group: 'component/date', text: 'Date', path: 'date', component: DateDemo },
	{ group: 'component/time', text: 'Time', path: 'time', component: Time },
	{ group: 'component/datetime', text: 'DateTime', path: 'datetime', component: DateTime },
	{ group: 'component/tab', text: 'Tab', path: 'tab/basic', component: TabBasic },
	{ group: 'component/tab', text: 'Tab Interactive', path: 'tab/interactive', component: TabInteractive },
	{ group: 'component/button', text: 'Buttons', path: 'button', component: Button },
	{ group: 'component/radio', text: 'Radio', path: 'radio', component: Radio },
	{ group: 'component/checkbox', text: 'Checkbox', path: 'checkbox', component: Checkbox },
	{ group: 'component/dropdown', text: 'Dropdown', path: 'dropdown', component: Dropdown },
	{ group: 'component/modal', text: 'Modal', path: 'modal', component: Modal },
	{ group: 'component/tree', text: 'Tree', path: 'tree', component: Tree },
	{ group: 'component/menu', text: 'Menu', path: 'menu', component: Menu },
	{ group: 'component/message', text: 'Message', path: 'message', component: Message },
	{ group: 'module/alert', text: 'Alert', path: 'alert', component: Alert },
	{ group: 'module/toastr', text: 'Toastr', path: 'toastr', component: Toastr },
	{ group: 'module/focus', text: 'Focus', path: 'focus', component: Focus },
	{ group: 'filter/int', text: 'Int', path: 'filters/int', component: Int }
]

// Build router routes
export const routes = m.map((m) => {
	return {
		group: m.group,
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