import * as swal from 'sweetalert'
import * as toastr from 'toastr'

export type Alert = typeof swal 
export type Toastr = typeof toastr
export type Focus = (element: string | HTMLElement | JQuery) => JQuery

interface LoadingModule {
	start()
	stop()
}

export type Loading = (element: string, auto?: boolean) => LoadingModule