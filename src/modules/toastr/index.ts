import * as Vue from 'vue'
import * as toastr from 'toastr'
import '../../../node_modules/toastr/build/toastr.css';

export function toast(instance, $this: Vue) {
	return toastr;
}