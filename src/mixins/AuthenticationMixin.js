import alertConfig from '@/assets/alert.config.json';

const AuthenticationMixin = {
  methods: {
    isConnected() {
      return this.$store.state.user.isConnected;
    },
    getUser() {
      return this.$store.state.user;
    },
    isUserGranted(roles) {
      return roles.some(role => this.getUser().roles.includes(role));
    },
    authenticate(token, keepActive) {
      return this.$http.get(this.$store.state.urls.userInformation, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }).then((response) => {
        const data = {
          token,
          roles: response.data.roles,
          ...response.data.user,
        };
        this.$store.commit('setUser', data);
        if (keepActive) {
          window.localStorage.setItem('user-token', token);
        } else {
          window.localStorage.removeItem('user-token');
        }
        if (this.isUserGranted(['ADMIN'])) {
          return this.$http.get(this.$store.state.urls.alerts, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          });
        }
        return null;
      }).then((response) => {
        if (response != null) {
          response.data.resources.forEach((alert) => {
            this.$store.commit(
              'showMessage',
              {
                message: alert.message,
                color: alertConfig.color[alert.severity],
                icon: alertConfig.icon[alert.type],
              },
            );
          });
        }
      }).catch((response) => {
        this.$store.commit(
          'showMessage',
          { message: 'Wrong username or password.', color: 'error' },
        );
        return response;
      });
    },
    authenticateFromStorage() {
      const token = window.localStorage.getItem('user-token');
      if (token != null) {
        this.authenticate(token, true)
          .catch(() => window.localStorage.removeItem('user-token'));
      }
    },
    disconnect() {
      this.$store.commit('disconnect');
      if (window.localStorage.getItem('user-token') != null) {
        window.localStorage.removeItem('user-token');
      }
      this.$router.push('/');
    },
  },
};

export default AuthenticationMixin;
