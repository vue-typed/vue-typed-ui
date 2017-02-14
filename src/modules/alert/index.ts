import * as Vue from 'vue'
import { default as swal } from 'sweetalert2'
import '../../../node_modules/sweetalert2/dist/sweetalert2.css';

export function alert(instance, $this: Vue) {
	return function (options: any) {
		return swal.apply(this, arguments)
	}
}