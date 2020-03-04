<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon :v-text="icon" />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title :v-text="label" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list-item__icon {
  margin-right: 16px !important;
}
</style>
