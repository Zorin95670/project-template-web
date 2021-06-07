<template>
  <div class="authentication-settings-panel">
    <div class="settings-title">
      <h3>Update administrator password</h3>
    </div>
    <div class="settings-content">
      <form>
        <input
          v-model="password"
          type="password"
          autocomplete="new-password"
          placeholder="New password"/>
        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationSettingsPanel',
  created() {
    if (!this.$store.state.isConnected || !this.$store.state.roles.includes('ADMIN')) {
      this.$router.push('/page404');
    }
  },
  data() {
    return {
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
  .authentication-settings-panel {
    display: inline-flex;
    flex-direction: column;
    max-width: 990px;
    width: 990px;
    align-items: center;
    justify-content: flex-start;

    .settings-title {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 600;
      border-bottom: 2px solid var(--primary-border);
      width: 100%;
    }

    .settings-content {
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 15px;

      * {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
</style>
