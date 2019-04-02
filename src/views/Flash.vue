<template>
  <div v-if="electron">
    <h1>Electron</h1>
  </div>
  <div v-else>
    <h1>Unavailble</h1>
    <p>This section is only availble in our desktop app</p>
  </div>
</template>

<script>
export default {
  name: 'Flash',
  components: {
  },
  methods: {
    track() {
      this.$ga.page('/flash');
    }
  },
  computed: {
    electron: function () { return window.electron; }
  }
};
</script>
