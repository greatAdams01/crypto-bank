<template>
  <div id="nav">
    <nav
      class="navigate"
    >
      <div class="container nav-container mt-3">
        <div class="nav-brand">
            <img src="/img/logo-img.png">
        </div>
        <ul class="nav-container">
          <li
            v-for="route in routes"
            :key="route.url"
            class="nav-item"
          >
            <router-link :to="route.url" class="nav-link">{{ route.title }}</router-link>
          </li>
        </ul>
        <div class="auth">
          <button @click="$router.push('/login')" class="btn btn-white">Login</button>
          <button @click="$router.push('/signup')" class="btn btn-primary">Sign up</button>
        </div>
      </div>
   </nav>
  </div>
</template>

<script>
import routes from '../../data/urls.js'
export default {
  name: 'App',
  data () {
    return {
      routes,
      view: {
        topOfPage: true
      }
    }
  }
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
}
</script>