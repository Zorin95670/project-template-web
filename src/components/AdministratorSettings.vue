<template>
  <v-expansion-panel-content>
    <div style="display: flex; flex-direction: row; justify-content: space-around;">
      <v-card outlined max-width="372">
        <v-card-title>Change default administrator password</v-card-title>
        <v-card-text>
          <v-text-field
            dense
            label="New password"
            type="password"
            autocomplete="current-password"
            v-model="password"
            prepend-icon="mdi-lock"
            :rules="rules.password"
            clearable
            required></v-text-field>
          <v-text-field
            dense
            label="Confirm password"
            type="password"
            autocomplete="current-password"
            v-model="passwordConfirmation"
            prepend-icon="mdi-lock-check"
            :rules="rules.passwordConfirmation"
            clearable
            required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success">
            <v-icon left>mdi-content-save</v-icon>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card outlined max-width="372">
        <v-card-title>Set default administrator authentication</v-card-title>
        <v-card-text>
          <v-switch
            v-model="administratorAuthentication"
            label="Administrator authentication"
          ></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success">
            <v-icon left>mdi-content-save</v-icon>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-expansion-panel-content>
</template>

<script>
export default {
  name: 'AdministratorSettings',
  data() {
    return {
      administratorAuthentication: true,
      password: '',
      passwordConfirmation: '',
      rules: {
        password: [
          v => !!v || 'Password is required',
        ],
        passwordConfirmation: [
          v => !!v || 'Password confirmation is required',
          v => v === this.password || 'Different to password.',
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>
