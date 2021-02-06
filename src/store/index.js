import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editable: true,
    fireUser: null
  },
  getters: {
    getUserName(state) {
      return state.fireUser.displayName;
    },
    getPhotoUrl(state) {
      return state.fireUser.photoURL;
    },
    isLogin(state) {
      if (state.fireUser) {
        return true;
      } else {
        return false;
      }
    }
  },
  mutations: {
    setEdit(state, edit) {
      state.editable = edit;
    },
    setFireUser(state, fu) {
      state.fireUser = fu;
    }
  },
  actions: {},
  modules: {}
});
