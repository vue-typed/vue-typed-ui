import { _MenuVerticalBase } from './_base';
import { Component } from 'vue-typed';

@Component({
	template: '<div class="ui vertical menu"><slot></slot></div>',
})
export class MenuVertical extends _MenuVerticalBase {

}