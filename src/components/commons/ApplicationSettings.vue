<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <div>
          <v-icon left>mdi-shield-account</v-icon>
          Adminstrator account.
        </div>
      </v-expansion-panel-header>
      <administrator-settings/>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <div>
          <v-icon left>mdi-video-input-component</v-icon>
          Authentication settings.
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import AdministratorSettings from '@/components/AdministratorSettings.vue';

export default {
  name: 'ApplicationSettings',
  components: { AdministratorSettings },
};
</script>

<style scoped>

</style>
