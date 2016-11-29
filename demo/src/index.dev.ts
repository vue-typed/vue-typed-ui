import * as Vue from "vue"


if (!window['__spa__HMR']) {
    mountApp()
} else {

    // console.clear()
    console.log(' -- reloaded -- ')
    // destroy and remove old app
    var vm =  window['__spa__HMR'] as Vue
    vm.$destroy()
    vm.$el.remove()    

    // create new placeholder
    var div = document.createElement('div')
    div.setAttribute('id', 'app')
    document.getElementsByTagName('body')[0].appendChild(div)

    // remount app
    mountApp()
}


function mountApp() {
    var main = require('./index.ts').default
    window['__spa__HMR'] = new Vue(main).$mount('#app')
}


if (module['hot']) {
    module['hot'].accept();
}