<template lang="pug">
  footer(:class="$style.footer")
    footer-logo
    p(:class="$style.copyright") &copy;
      | naomoon 2017-2018
</template>

<script>
import Footerlogo from "@/assets/images/svg/logo.svg";

export default {
  name: "Footerlogo",
  components: {
    Footerlogo
  }
};
</script>

<style　lang="scss" module>
.footer {
  width: 100%;
  height: auto;
  margin: 90px auto 110px;
  text-align: center;
}

.copyright {
  font-size: 0.6rem;
}
</style>
