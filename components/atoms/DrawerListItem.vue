<template>
  <v-list-item-group>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>
          {{ icon }}
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ label }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
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
