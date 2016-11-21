import * as Vue from 'vue';
import { Component } from 'vue-typed';
import { DateFormat, TimeFormat } from '../../../lib/types';
import { NumericSettingsPage } from './numeric-settings-page';
import * as _ from "lodash"

@Component({
	template: require('./index.html'),
	components: {
		'numeric-settings-page': NumericSettingsPage
	}
})
export class SettingsPage extends Vue {
	
	dateFormats = ['MM/DD/YYYY' , 'DD/MM/YYYY' , 'MMM DD, YYYY' , 'MMMM DD, YYYY']
	timeFormats = ['HH:mm' , 'hh:mm A' , 'HH:mm:SS']

	value = {}

	created() {		
		this.reset()
	}

	save() {
		Vue.set(this.$ui, '$settings', this.value)
	}

	reset() {
		// settings should not reactive before applied
		this.value = _.cloneDeep(this.$ui.$settings)
	}


} 