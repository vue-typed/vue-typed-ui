import { _SegmentBase } from './_base';
import { Options } from 'vue-typed';

@Options({
	template: '<div class="ui segment"><slot></slot></div>'
})
export class Segment extends _SegmentBase { 

}