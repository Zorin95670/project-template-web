import nunjucks from 'nunjucks';

const NunjucksMixin = {
  data() {
    nunjucks.configure({ autoescape: true });
    return {};
  },
  methods: {
    renderString: nunjucks.renderString,
  },
};

export default NunjucksMixin;
