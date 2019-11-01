<template lang="pug">
  footer.wrapper__large(:class="$style.footer")
    footer-logo
    p(:class="$style.copyright") &copy;
      | naomoon
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
  text-align: center;
  background: $bg200;
  padding: 40px 0;
  color: $white;
}

.copyright {
  font-size: 0.6rem;
}
</style>
