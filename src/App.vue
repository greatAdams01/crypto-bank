<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import DesktopNav from './components/navigations/DesktopNav.vue'
// import MobileNav from './components/navigations/MobileNav.vue'
</script>

<template>
  <div id="nav">
    <DesktopNav
      class="desktop"
    />
    <MobileNav
      class="mobile"
    />
  </div>
  <router-view/>
</template>

<style>
.desktop {
  display: none;
}

@media (min-width: 950px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}
</style>
