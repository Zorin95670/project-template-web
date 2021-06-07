const snackbar = {
  state: {
    message: '',
    color: '',
    icon: null,
  },
  mutations: {
    showMessage(state, payload) {
      console.log(payload);
      state.message = payload.message;
      state.icon = payload.icon;
      state.color = payload.color;
    },
  },
};
export default snackbar;
