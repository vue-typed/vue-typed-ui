import * as Vue from 'vue'
import { Component, Prop } from 'vue-typed';
import { NumericSettings } from '../../../lib/settings';

@Component({ template: require('./numeric-settings-page.html') })
export class NumericSettingsPage extends Vue {

  @Prop()
  value: NumericSettings

}