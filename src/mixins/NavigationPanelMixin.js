export default {
  computed: {
    isNavigationPanelOpen() {
      return this.$store.state.navigationPanel;
    },
  },
  methods: {
    openNavigationPanel() {
      this.setNavigationPanelState(true);
    },
    closeNavigationPanel() {
      this.setNavigationPanelState(false);
    },
    setNavigationPanelState(value) {
      this.$store.commit('setNavigationPanelState', value);
    },
  },
};
