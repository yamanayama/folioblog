<template lang="pug">
  //- button(:class="$style.button",@click="openModal(skill)",)
  button.button(:class="{'bg-teal': primary,'hover:bg-teal-dark': primary,'bg-red-lighter': danger,'hover:bg-red-light': danger,}" @click="$emit('click', $event)" ) {{label}}
    slot


</template>

<script>
export default {
  name: "Button",
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    methods: {
      click() {
        this.$emit("myclick");
      }
    }
  }
};
</script>

<style lang='scss' module>
.button {
  transition: 0.3s ease 0s;
  font-size: 1.3rem;
  width: 100%;

  &__primary {
    background: $primary;
    height: 48px;
    letter-spacing: 0.05em;
    font-weight: 700;
    color: $white;
    line-height: 0;
    border: none;
    cursor: pointer;
    @include radius;

    &:hover {
      background: darken($primary, 30%);
    }
  }

  &__secondary {
    height: 48px;
    letter-spacing: 0.05em;
    font-weight: 700;
    color: $primary;
    line-height: 0;
    border: 2px solid $primary;
    cursor: pointer;
    @include radius;
  }
}
</style>