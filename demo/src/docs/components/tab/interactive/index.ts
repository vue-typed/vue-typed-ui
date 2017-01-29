import { Options } from 'vue-typed';
import * as Vue from 'vue'

@Options({
	template: require('./view.pug')()
})
export class TabInteractive {
	style: string = "pointing"
}