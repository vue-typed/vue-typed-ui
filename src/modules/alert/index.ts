
import * as swal  from 'sweetalert'
import '../../../node_modules/sweetalert/dist/sweetalert.css';

export function alert(instance) {
	return function (options: any) {
		swal.apply(this, arguments)
	}
}