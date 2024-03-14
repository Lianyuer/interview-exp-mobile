import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ArticleItem from '@/components/ArticleItem'
import {
  Tabbar,
  TabbarItem,
  Form,
  Field,
  Button,
  NavBar,
  List,
  PullRefresh,
  Skeleton,
  Icon,
  Toast
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Skeleton)
Vue.use(Icon)
Vue.use(Toast)

Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
