<template>
  <div class="window">
    <div
      class="header"
      :class="state.toggleMobile"
    >
    <div class="container">
      <div class="flx-img-buger">
        <div class="icon icon-apple">
        <router-link to="/">
            <h5>Avaloq</h5>
          </router-link>
      </div>
        <div
          class="burger-container"
          @click="chanageMobileState"
        >
        <div id="burger">
          <div class="bar topBar"></div>
          <div class="bar btmBar"></div>
        </div>
      </div>
      
      </div>
      <ul
        class="menu"
        @click="chanageMobileState"
      >
        <li
          v-for="links in routes"
          :key="links.url"
          class="menu-item"
        >
          <router-link
            class="mt-3"
            :to="links.url"
          >
            {{ links.title }}
          </router-link>
        </li>
      </ul>
      <div class="auth">
        <button @click="$router.push('/login')" class="btn btn-white">Login</button>
        <button @click="$router.push('/signup')" class="btn btn-primary">Sign up</button>
      </div>
    </div>
    </div>
</div>
</template>

<script>
import { reactive } from 'vue'
import routes from '../../data/urls.js'
export default {
  name: 'MobileNav',
  setup () {
    const state = reactive({
      toggleMobile: ''
    })
    const chanageMobileState = () => {
      if (state.toggleMobile === 'menu-opened') {
        state.toggleMobile = ''
      } else {
        state.toggleMobile = 'menu-opened'
      }
    }
    return {
      state,
      routes,
      chanageMobileState
    }
  }
}
</script>