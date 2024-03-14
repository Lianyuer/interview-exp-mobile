import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ArticleItem from '@/components/ArticleItem'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
