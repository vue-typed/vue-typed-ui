import { Component, Virtual } from 'vue-typed';
import * as Vue from 'vue';
import { GlobalState } from '../init/state';


var Api = require('../../../doc/api.json');
import * as _ from 'lodash'

@Component({
  template: require('./view.pug')()
})
export class DemoPage extends Virtual<Vue>() {

  map: any = {};
  api: any[] = [];
  readme: string = ''

  created() {
    this.map = GlobalState.viewSoureMap[this.$route.path];

    this.api = [];
    if (this.map && this.map.api) {
      this.map.api.forEach((a) => {

        let api = Api[a];       

        if (api.readme) {
          this.readme = require('!html-loader!markdown-loader!../readme/' + api.dir + '/README.md')
        }

        this.api.push({
          module: api.module,
          props: api.props,
          methods: api.methods,
          hasProp: !_.isEmpty(api.props),
          hasMethod: !_.isEmpty(api.methods),
          apiInfo: apiInfo(api)
        });
      });
    }

    function apiInfo(api) {
      let prefix = 'ui'
      switch(api.type) {
        case 'module':
          return `$${prefix}.${api.module}`;

        default:
          return `${prefix}-${api.module}`;
      }

    }
  }

  get title() {
    if (!this.map) return '';
    return this.map.group ? `${this.map.kind} / ${this.map.group}` : this.map.kind
  }

  get subTitle() {
    return this.map.title
  }

  get html() {
    if (!this.map) return '';
    return this.map.html;
  }

  get ts() {
    if (!this.map) return '';
    return this.map.ts;
  }

  get js() {
    if (!this.map) return '';
    return this.map.js;
  }

}