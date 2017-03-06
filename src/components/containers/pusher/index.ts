import { _PusherBase } from './_base';
import { Options } from 'vue-typed';
import { IPusher } from '../../../../lib/interface';

@Options({
	template: '<div class="pusher"><slot></slot></div>'
})
export class Pusher extends _PusherBase implements IPusher { 

	target() : JQuery {
		return $(this.$el)
	}

}