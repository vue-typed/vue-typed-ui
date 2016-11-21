import * as Vue from 'vue'
import { Component } from 'vue-typed'
import * as VueTypedUI from '../../dist/vue-typed-ui'
import { expect } from 'chai'


describe('<ui-segment>', () => {

	Vue.use(VueTypedUI)

	it('should render element correctly', () => {

		@Component({ template: '<div><ui-segment id="c1">Meh</ui-segment></div>' })	class A extends Vue { }

		var vm = (new A()).$mount();

		let target = vm.$el.querySelector('#c1');
		expect(target).to.have.class('ui')
		expect(target).to.contain.text('Meh')

	})
	
})
