<template>
  <div v-html='identicon'></div>
</template>

<script>
import jdenticon from 'jdenticon';

export default {
  name: 'Identicon',
  props: {
    value: String,
    size: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.value, this.size);
    },
  },
};
</script>

<style scoped>

</style>
