import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: []
  },
  mutations: {
    setEntries(state, payload){
      state.entries = payload.entries
    }
  },
  actions: {
    fetchEntries(context){
      db.ref('entries').on('value', snap => {
        context.commit('setEntries', { entries: snap.val() })
      })
    }
  },
  modules: {
  }
})
