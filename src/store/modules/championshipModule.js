export default {
  state:{
    championship: 'Campeonato Brasileiro',
  },
  getters: {
    getChampionship(state) {
      return state.championship;
    },
  },
  mutations:{
    setChampionship(state, newValue){
      state.championship = newValue;
    },
  },
  actions:{
    changeChampionship(content, value){
      content.commit('setChampionship', value);
    },
  }
}