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
          <img src="/img/Enter-OTP-pana.svg" alt="" />
        </div>
        <div class="col-12 col-lg-4 form-item">
          <h5 class="text-center py-4">Sign up</h5>
          <div class="content">
            <h5 class="text-center py-4">Welcome to Rexsteelz!</h5>
            <form @submit.prevent="onsubmit">
              <div v-if="errorMsg" class="bg-danger">
                {{ errorMsg }}
              </div>
              <div v-if="successMsg" class="bg-success">
                {{ successMsg }}
              </div>
              <div class="form-input">
                <label for="email">Email</label>
                <input v-model.trim="email" type="email" name="email" required/>
              </div>
              <div class="form-input">
                <label for="password">Password</label>
                <input
                  v-model.trim="password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div class="form-input">
                <label for="confirmpassword">Confirm password</label>
                <input
                  v-model.trim="confirmPassword"
                  type="password"
                  name="confirmpassword"
                  required
                />
              </div>
              <div class="btn-item">
                <button type="submit" class="btn btn-primary text-center">
                  Sign up
                </button>
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
  name: "Signup",
  title: "Sign up",
  data() {
    return {
      errorMsg: '',
      successMsg: '',
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onsubmit() {
      this.errorMsg = ''
      if(!this.email || !this.password ) {
        this.errorMsg = 'Add Inputs'
        return
      }
      if(this.confirmPassword !== this.password) {
        this.errorMsg = 'Passwwords don\'t match'
        return
      }

      const userData = {
        email: this.email,
        password: this.password
      }

      this.errorMsg = ''
      this.successMsg = 'Sucessful'

      console.log(userData)
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
