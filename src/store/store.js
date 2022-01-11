import Vue from 'vue'
import Vuex from 'vuex'

import championshipModule from './modules/championshipModule'
import clubeModule from './modules/clubeModule'
import newsModule from './modules/newsModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    championshipModule,
    clubeModule,
    newsModule
  }
})