<template lang="pug">
section(:class="$style.container")
  app-logo
  h1(:class="$style.title") nuxtblogassbbbs
  h2(:class="$style.subtitle") Nuxt.js project
  .links
    a(href="https://nuxtjs.org/") Documentation
    a(href="https://nuxtjs.org/") GitHub
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style lang="scss" module>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: $fontFamilyEng100; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $primary; // sassで定義した変数に差し替え
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  /* color: $secondaryColor; // sassで定義した変数に差し替え */
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
