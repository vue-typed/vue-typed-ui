import { Component, Options, Mixin, Virtual } from 'vue-typed';
import * as Vue from 'vue'
import { AppSidebar } from '../sidebar';
import { AppSettings } from '../settings';

@Component({
	template: require('./view.pug')(),
	components: {
		'app-sidebar': AppSidebar,
		'app-settings': AppSettings
	}
})
export class App extends Vue {
	mounted() {

		$(window).resize(() => {

			let windowHeight = $(window).height()
			let topMenuHeight = $('#top-menu').height()
			let footerHeight = $('#footer').height()
			$('#app').css('min-height', windowHeight)
			// $('#home, #home > div').css('min-height', windowHeight - topMenuHeight)
			let pads = $('#app-container').css('padding-top') + ' - ' +
				$('#app-container').css('padding-bottom') + ' - ' +
				$('#app-container').css('margin-top') + ' - ' +
				$('#app-container').css('margin-bottom')
			$('#app-container').css('min-height', 'calc(' + (windowHeight - topMenuHeight - footerHeight) + 'px - ' + pads + ')')

		}).trigger('resize')

	}

	showAppSettings() {
		this.$ui.modal('#app-settings').show()
	}

	get year() {
		let yr = new Date().getFullYear()
		if (yr <= 2017) yr = 2017
		return yr;
	}

	sidebarToggle() {
		$(this.$el).find('#sidebar').sidebar('toggle')
	}
}