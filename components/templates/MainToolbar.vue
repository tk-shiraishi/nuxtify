<template>
  <v-app-bar dense class="main-app-bar" :class="{collapse: isCollapse}">
    <v-app-bar-nav-icon @click="toggleCollapse" />
    <v-toolbar-title>
      Page Title
    </v-toolbar-title>

    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['isCollapse'])
  },
  methods: {
    ...mapActions('app', ['toggleCollapse'])
  }
}
</script>

<style lang="scss" scoped>
.main-app-bar {
  position: absolute;
  // Vuetify default value.
  left: 256px !important;

  &.collapse {
    // Vuetify default value;
    left: 56px !important;
}
}
</style>
