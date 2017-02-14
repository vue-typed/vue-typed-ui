import { default as swal } from 'sweetalert2'
import * as toastr from 'toastr'

export type Alert = typeof swal
export type Toastr = typeof toastr
export type Focus = (element: string | HTMLElement | JQuery) => JQuery

interface LoadingModule {
	start()
	stop()
}

export type Loading = (element: string, auto?: boolean) => LoadingModule