import { Accordion } from './accordion';
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
import { TabPath } from './tab/path';
import { Button } from './button';
import { Radio } from './radio';
import { Checkbox } from './checkbox';
import { Dropdown } from './dropdown';
import { DateDemo } from './date';
import { Time } from './time';
import { DateTime } from './datetime';
import { Modal } from './modal';
import { ModalMultiple } from './modal/multiple';
import { Tree } from './tree';
import { MenuDropdown } from './menu/dropdown';
import { MenuVertical } from './menu/vertical';
import { MenuHorizontal } from './menu/horizontal';
import { Message } from './message';
import { Alert } from './alert';
import { Toastr } from './toastr';
import { Focus } from './focus';
import { Int } from './filters/int';
import { Loading } from './loading';


// Main routes builder
const m = [
	{ group: 'component/accordion', text: 'Accordion', path: 'accordion', component: Accordion },
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
	{ group: 'component/tab', text: 'Tab Path', path: 'tab/path', component: TabPath },
	{ group: 'component/button', text: 'Buttons', path: 'button', component: Button },
	{ group: 'component/radio', text: 'Radio', path: 'radio', component: Radio },
	{ group: 'component/checkbox', text: 'Checkbox', path: 'checkbox', component: Checkbox },
	{ group: 'component/dropdown', text: 'Dropdown', path: 'dropdown', component: Dropdown },
	{ group: 'component/modal', text: 'Modal', path: 'modal', component: Modal },
	{ group: 'component/modal', text: 'Multiple Modal', path: 'modal/multiple', component: ModalMultiple },
	{ group: 'component/tree', text: 'Tree', path: 'tree', component: Tree },
	{ group: 'component/menu-dropdown', text: 'Menu Dropdown', path: 'menu/dropdown', component: MenuDropdown },
	{ group: 'component/menu-horizontal', text: 'Menu Horizontal', path: 'menu/horizontal', component: MenuHorizontal },
	{ group: 'component/menu-vertical', text: 'Menu Vertical', path: 'menu/vertical', component: MenuVertical },
	{ group: 'component/message', text: 'Message', path: 'message', component: Message },
	{ group: 'module/alert', text: 'Alert', path: 'alert', component: Alert },
	{ group: 'module/toastr', text: 'Toastr', path: 'toastr', component: Toastr },
	{ group: 'module/focus', text: 'Focus', path: 'focus', component: Focus },
	{ group: 'module/loading', text: 'Loading', path: 'loading', component: Loading },
	{ group: 'filter/int', text: 'Int', path: 'filters/int', component: Int },	
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