import * as Vue from 'vue'
import * as swal  from 'sweetalert'
import '../../../node_modules/sweetalert/dist/sweetalert.css';

export function alert(instance, $this: Vue) {
	return function (options: any) {
		swal.apply(this, arguments)
	}
}