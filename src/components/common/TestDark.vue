<template>
  <div class="container-center">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },
  methods: {
  setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    this.userTheme = theme;
    document.documentElement.className = theme;
  },
  toggleTheme() {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") {
      this.setTheme("dark-theme");
    } else {
      this.setTheme("light-theme");
    }
  },
  getMediaPreference() {
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (hasDarkPreference) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  },

}

};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
.switch-checkbox {
  display: none;
}
.switch-label {
  /* for width, use the standard element-size */
  width: var(--element-size); 

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  padding: 15px 0px;
  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 
.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.0);
  height: calc(var(--element-size) * 0.5);
  width: calc(var(--element-size) * 0.5);
  top: -2px;
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}
.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

</style>