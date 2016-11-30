import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import { Component } from 'vue-typed';
import * as VueTypedUI from '../../dist/vue-typed-ui';
import { SettingsPage } from './settings-page';


// --------------------------------------------------------------------------------------
// Plug the plugins. 
// MUST BE PUT THIS ON TOP OF IMPORTING ANYTHING ELSE THAT MIGHT USE THE PLUGINS!
// OTHERWISE YOU'LL HAVE WEIRD UNREGISTERED COMPONENT WARNING.
// --------------------------------------------------------------------------------------
Vue.use(VueRouter);

Vue.use(VueTypedUI, <VueTypedUI.Options> {
	prefix: 'ui',
	toastr: {
		showDuration: 300,
		hideDuration: 300,
		timeOut: 3000
	}
});


import { Menu } from './menu';
import { routes } from './routes';


// --------------------------------------------------------------------------------------
// Initialize router
// --------------------------------------------------------------------------------------
var router = new VueRouter({
	routes,
	linkActiveClass: 'active'
});

import './styles/index.less'

// --------------------------------------------------------------------------------------
// Init main demo app
// --------------------------------------------------------------------------------------
@Component({
	template: require('./index.html'),
	components: {
		'app-menu': Menu,
		'app-settings-page': SettingsPage
	}
})
class App extends Vue {

	changeSettings() {
		this.$ui.modal('#app-settings-page').show()
	}

}

export default {
	router,
	render: h => h(App),
}