<template lang="pug">
  transition(name="modal")
    div(:class="$style.modal__overlay",@click="$emit('close')")
      div(:class="$style.modal")
        div(:class="$style.modal__block")
          img(:src="val.img",:alt="val.title",:class="$style.modal__img")
          section(:class="$style.modal__box")
            h4(:class="$style.modal__title") {{val.title}}
            p(:class!="$style.modal__text") {{val.despriction}}
          button(type="button",:class="$style.modal__close",@click="$emit('close')")
            ico_close

</template>

<script>
import ico_close from "@/assets/images/svg/ico_close.svg";

export default {
  name: "Modal",
  props: {
    val: Object
  },

  components: {
    ico_close
  }
};
</script>

<style lang='scss' module>
.modal {
  @include centerF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__overlay {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: $bgOVR;
    transition: opacity 0.3s ease;
  }

  &__block {
    min-width: 680px;
    margin: 0px auto;
    padding: 20px 30px;
    background: $white;
    @include radius;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
    transition: all 0.3s ease;
    position: relative;
  }

  &__box {
    margin: 2em;
  }

  &__img {
    width: 60%;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    color: $primary;
    position: relative;
    margin-bottom: 3rem;
    font-family: $fontFamilyEng200;

    &::after {
      position: absolute;
      background: $primary;
      border-radius: 5px;
      content: "";
      width: 40px;
      height: 4px;
      bottom: -1rem;
      left: 0;
    }
  }

  &__text {
    text-align: center;
    @include justify();
  }

  &__close {
    position: absolute;
    top: -80px;
    right: -16px;

    svg {
      $size: 64px;
      stroke: $white;
      width: $size;
      height: $size;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
@include md {
  .modal {
    &__block {
      display: flex;
    }

    &__img {
      max-width: 200px;
    }
  }
}
</style>