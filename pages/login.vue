<template>
  <md-card class="login-form-card">
    <md-toolbar md-elevation="2" class="md-primary">
      <p class="md-title">
        Login Form
      </p>
    </md-toolbar>
    <md-card-content>
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-field md-clearable>
          <label for="userName">
            Username
          </label>
          <md-input
            v-model="form.userName"
            name="userName"
          />
        </md-field>

        <md-field md-clearable>
          <label for="password">
            Password
          </label>
          <md-input
            v-model="form.password"
            name="password"
            type="password"
          />
        </md-field>
      </form>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-raised md-primary">
        LOGIN
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  layout: 'nothing',

  data () {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form-card {
  width: 500px;
  margin: auto;
  top: 70px;
}
</style>
