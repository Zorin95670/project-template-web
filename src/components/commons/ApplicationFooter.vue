<template>
  <v-footer app fixed padless>
    <v-card
      flat
      tile
      width="100%"
      class="text-center">
      <v-card-text>
        <v-btn
          icon
          link
          target="_blank"
          title="See application changelog"
          href="/changelog.html">
          <v-icon>mdi-math-log</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        IHM {{ version.gui }} - API {{ version.api }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'ApplicationFooter',
  mounted() {
    const { apiVersion } = this.$store.state.urls;
    if (apiVersion) {
      this.$http.get(apiVersion).then((response) => {
        this.version.api = response.data.version;
      });
    }
  },
  data() {
    return {
      icons: [],
      version: {
        gui: this.$root.version,
        api: '-',
      },
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
