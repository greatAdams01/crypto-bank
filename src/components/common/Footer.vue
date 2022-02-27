<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 footer-item">
          <h3>Ready to get started?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button class="btn btn-primary">Get started</button>
          <DarkMode class="mt-5" />
        </div>
        <div class="col-12 col-md-4 footer-item">
          <ul>
            <li
            v-for="route in routes"
            :key="route.url"
            class="nav-item"
          >
            <router-link :to="route.url" class="nav-link">{{ route.title }}</router-link>
          </li>
          <li>
            <div class="social-icons">
              <div class="social-item">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook-f" />
                </a>
              </div>
              <div class="social-item">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter" />
                </a>
              </div>
              <div class="social-item">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram" />
                </a>
              </div>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import routes from '../../data/urls.js'
import DarkMode from './TestDark.vue'
</script>

<style lang="scss" scoped>

</style>