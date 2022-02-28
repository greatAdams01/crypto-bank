<template>
  <div class="sign-up">
    <div class="container">
      <div class="top-bar">
      <div class="row justify-content-between">
        <div class="col-4 top-item">
          <h5>Rexsteelz</h5>
        </div>
        <div class="col-4 top-item">
          <h5 @click="$router.push('/')">Close</h5>
        </div>
      </div>
    </div>
    <div class="row mt-4 justify-content-between form-row">
      <div class="col-12 col-lg-6 form-item">
        <img src="/img/Enter-OTP-pana.svg" alt="">
      </div>
      <div class="col-12 col-lg-4 form-item">
        <h5 class="text-center py-4">Sign up</h5>
        <div class="content">
          <h5 class="text-center py-4">Welcome to Rexsteelz!</h5>
          <form @submit.prevent="onsubmit">
            <div class="form-input">
              <label for="email">Email</label>
              <input v-model.trim="email" type="email" name="email">
            </div>
            <div class="form-input">
              <label for="password">Password</label>
              <input v-model="password" type="password" name="password">
            </div>
            <div class="form-input">
              <label for="confirmpassword">Confirm password</label>
              <input v-model="confirmPassword" type="confirmpassword" name="confirmpassword">
            </div>
            <div class="btn-item">
              <button type="submit" class="btn btn-primary text-center">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  title: 'Sign up',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onsubmit (e) {
      console.log('Fired')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
