import { Component } from 'vue-typed'
import * as Vue from 'vue'
import { Base } from '../../base'

@Component({ template: require('./index.html') })
export class Int extends Base {

	number: number = 100000
	decimal: number = 12456.789

}