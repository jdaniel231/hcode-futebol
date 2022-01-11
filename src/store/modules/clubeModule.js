export default {
  state: {
    clubeName: 'Hcode Treinamento',
  },
  getters:{
    getClubeName(state) {
      return state.clubeName;
    },
  },
  mutations: {
    setClubeName(state, newName){
      state.clubeName = newName;
    }
  },
  actions:{
    updateClubeName(content, value) {
      content.commit('setClubeName', value );
    }
  }
}