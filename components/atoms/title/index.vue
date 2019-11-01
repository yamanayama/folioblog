<template lang="pug">
  h2(:class="$style.title") {{ title }}
</template>

<script>
export default {
  name: "Title", // ここは外部をコンポーネントとして呼ぶ名前になる

  props: ["title"]
};
</script>

<style lang="scss" module>
.title {
  font-family: $fontFamilyEng200;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 8px;
    background: $text100;
    transition: 0.8s;
    transform: scaleX(0);
  }
}

@include md {
  .title {
    font-size: 8rem;
    margin-bottom: 20px;
  }
}
</style>