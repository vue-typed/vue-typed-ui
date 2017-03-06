import { _SegmentBase } from './_base';
import { Options } from 'vue-typed';
import { ISegment } from '../../../../lib/interface';

@Options({
	template: '<div class="ui segment"><slot></slot></div>'
})
export class Segment extends _SegmentBase implements ISegment {

	target(): JQuery {
		return $(this.$el)
	}

}