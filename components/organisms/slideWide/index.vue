<template lang="pug">

ul(:class="$style.slidewide")
  li(v-for="skill in skills" :key="skill.id",:class="$style.slidewide__list")
    figure(:class="$style.slidewide__img")
      <img :src="skill.id" :alt="skill.title">
    h3(:class="$style.slidewide__title") {{skill.title}}
    p(:class!="$style.slidewide__text") {{skill.text}}
</template>

<script>
export default {
  name: "SlideWide", // ここは外部をコンポーネントとして呼ぶ名前になる

  // props: ["id", "title", "text"]
  props: {
    skills: {
      type: Array
    }
  }
};
</script>

<style lang="scss" module>
.slidewide {
  margin: auto;
  padding: 0;
  display: flex;
  width: 400%;
  overflow-x: scroll;
  overflow-scrolling: touch;

  figure {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__list {
    width: 90%;
    text-align: center;
    margin-bottom: 40px;
    margin-right: 1%;
    background: $white;
    @include radius;
    overflow: hidden;
    padding: 0.2em 0.5em;
  }

  &__title {
    font-size: 2rem;
    font-family: $fontFamilyEng200;
    font-weight: 400;
    text-align: center;
  }

  &__text {
    @include justify;
    margin: 0 auto 19px;
  }
}

@include md {
  .slidewide {
    figure {
      height: 400px;
    }

    &__list {
      width: 320px;
    }

    &__title {
      font-size: 4rem;
    }

    &__text {
      @include justify;
      margin: 0 24px 32px;
    }
  }
}
</style>