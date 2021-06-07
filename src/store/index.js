import Vue from 'vue';
import Vuex from 'vuex';
import Snackbar from '@/store/Snackbar';
import User from '@/store/User';
import config from '@/assets/config.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationPanel: false,
    urls: config.urls,
  },
  mutations: {
    setNavigationPanelState(state, value) {
      state.navigationPanel = value;
    },
  },
  actions: {
  },
  modules: {
    snackbar: Snackbar,
    user: User,
  },
});
