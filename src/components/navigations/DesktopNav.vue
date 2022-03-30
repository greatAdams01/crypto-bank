<template>
  <div id="nav">
    <nav class="navigate">
      <div class="container nav-container mt-3">
        <div class="nav-brand" v-if="theme === 'light-theme'">
          <img src="/img/logo-img.png" />
        </div>
        <div class="nav-brand" v-if="theme === 'dark-theme'">
          <img src="/img/Logo.svg" />
        </div>
        <ul class="nav-container">
          <li v-for="route in routes" :key="route.url" class="nav-item">
            <router-link :to="route.url" class="nav-link">{{
              route.title
            }}</router-link>
          </li>
        </ul>
        <div class="auth">
          <button @click="$router.push('/login')" class="btn btn-white">
            Login
          </button>
          <input
            @click="$router.push('/signup')"
            class="btn signup bg-white"
            value="Sign up"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import routes from "../../data/urls.js";
export default {
  name: "App",
  data() {
    return {
      routes,
      theme: localStorage.getItem("user-theme"),
      view: {
        topOfPage: true,
      },
    };
  },
  //   beforeMount () {
  //     window.addEventListener('scroll', this.handleScroll)
  //   },
  //   methods: {
  //     handleScroll () {
  //       if (window.pageYOffset > 0) {
  //         if (this.view.topOfPage) this.view.topOfPage = false
  //       } else {
  //         if (!this.view.topOfPage) this.view.topOfPage = true
  //       }
  //     }
  //   }
};
</script>
<style lang="scss" scoped>
// #nav .nav-container .auth button{
//   color: #0F62FE!important;
// }
</style>