import { Component } from 'vue-typed';

@Component({
	template: require('./view.pug')()
})
export class AppHome {
	mounted() {
		$(window).resize(()=>{
			let windowHeight = $(window).height()
			$('#home, #home > div').css('min-height', windowHeight)
		}).trigger('resize')
	}
}