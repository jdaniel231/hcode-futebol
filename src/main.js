import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store'
import router from './router/routes'

Vue.use(Vue2Filters)

Vue.config.productionTip = false

// Global Guards

// router.beforeEach((to, from, next) => {
//   console.log(to, from);

//   next();
// })

// router.afterEach(() =>{
//   console.log('Ok')
// })

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
