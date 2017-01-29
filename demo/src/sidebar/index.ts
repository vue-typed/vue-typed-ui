import { Component, Virtual } from 'vue-typed';
import * as Vue from 'vue'
import { GlobalState } from '../init/state';
import * as _ from 'lodash'

@Component({
  template: require('./view.pug')(),
  components: {
    'app-menus' :{
      template: require('./menus.pug')(),
      props: ['items', 'header']
    }
  }
})
export class AppSidebar extends Vue {

  components: any[] = []
  decorators: any[] = []
  filters: any[] = []
  modules: any[] = []

  created() {

    function buildMenus(source: any[], kind): any[] {
      let menus = []
      _.filter(source, (p) => {
        return p.kind === kind;
      }).forEach((m) => {

        // menu to add
        let menu = {
          title: m.title,
          path: m.path
        }

        if (m.group) {
          // has group
          
          let parent = _.find(menus, (p) => {
            return p.title === m.group;
          })
          
          if (!parent) {
            // parent not created yet
            menus.push({
              title: m.group,
              menus: [menu]
            })
          } else {
            // parent created
            parent.menus.push(menu)
          }
        } else {
          menus.push(menu)
        }
      })
      return menus;
    }

    this.components = buildMenus(GlobalState.menus, 'component')
    this.decorators = buildMenus(GlobalState.menus, 'decorator')
    this.filters = buildMenus(GlobalState.menus, 'filter')
    this.modules  = buildMenus(GlobalState.menus, 'module')

  }

  mounted() {
    $(this.$el).sidebar({
			context: $(this.$parent.$el),
			transition: 'overlay' as any,
		}).find('a.item, a.logo').click(()=>{			
			$(this.$el).sidebar('hide')
		})
  }

}