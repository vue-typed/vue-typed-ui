import { _PusherBase } from './_base';
import { Component } from 'vue-typed';

@Component({
	template: '<div class="pusher"><slot></slot></div>'
})
export class Pusher extends _PusherBase { 

}