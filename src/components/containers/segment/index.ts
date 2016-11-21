import { _SegmentBase } from './_base';
import { Component } from 'vue-typed';

@Component({
	template: '<div class="ui segment"><slot></slot></div>'
})
export class Segment extends _SegmentBase { 

}