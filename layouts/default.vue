<template>
  <div>
    <main-toolbar />
    <main-drawer />
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MainToolbar from '@/components/templates/MainToolbar'
import MainDrawer from '@/components/templates/MainDrawer'

export default {
  components: {
    MainToolbar,
    MainDrawer
  },
  data () {
    return {
      isCollapse: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ]
    }
  },
  methods: {
    ...mapActions('app', ['toggleCollapse']),
    toggle () {
      this.isCollapse = !this.isCOllapse
    }
  },
  watch: {
    isCollapse () {
      this.toggleCollapse()
    }
  }
}
</script>
