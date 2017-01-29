import { _PusherBase } from './_base';
import { Options } from 'vue-typed';

@Options({
	template: '<div class="pusher"><slot></slot></div>'
})
export class Pusher extends _PusherBase { 

}