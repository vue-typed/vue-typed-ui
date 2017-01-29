import { Options, Virtual } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class Checkbox extends Virtual<Vue>()  {

	checked: boolean = true
	enabledToggle = false;
	checkedVal: string = "yes"
	checkedNames: Array<string> = ['John']

	get checkedStatus() {
		return this.checked ? 'Uncheck me please!' : 'Check me please!'
	}

	get enabledToggleText() {
		return this.enabledToggle ? 'Disable me!' : 'Enable me!'
	} 

	get enabledToggleStatus() {
		return this.enabledToggle ? "I'm enable :)" : "I'm disable :("
	}

	checkAllNames() {
		Vue.set(this, 'checkedNames', ['Jack', 'John', 'Mike'])		 
	}

	clearAllNames() {
		Vue.set(this, 'checkedNames', [])		 
	}
	
}