import * as Vue from 'vue'
import { Component } from 'vue-typed'
import * as VueTypedUI from '../../dist/vue-typed-ui'
import { expect } from 'chai'


describe('vue-typed-ui root instance', () => {

	Vue.use(VueTypedUI)

	it('should have $UI instance with $settings property', () => {

		@Component() class A extends Vue { }

		var vm = (new A()).$mount()
		expect(vm).to.have.property('$UI').to.have.property('$settings')

	})

})
