<template lang="pug">
div(:class="$style.slidewide__wrap")
  ul(:class="$style.slidewide")
    li.shadow(v-for="skill in skills" :key="skill.id",:class="$style.slidewide__list")
      figure(:class="$style.slidewide__img")
        <img :src="skill.img" :alt="skill.title">
      div
        h3(:class="$style.slidewide__title") {{skill.title}}
        p(:class!="$style.slidewide__text") {{skill.despriction}}
        //- button.button(primary label="OK"@click="$emit('click', $event)")
        button.modal.button.button__primary(:class="$style.button" :style="{ width: '70%' }" @click="openModal(skill)") Read More
          ico_right

      modal(:val="postItem",v-if="showModal",@close="closeModal")
</template>

<script>
import ico_right from "@/assets/images/svg/ico_right.svg";
import Modal from "~/components/organisms/modal/index.vue";
import Button from "~/components/organisms/button/index.vue";

export default {
  name: "SlideWide",

  // props: ["id", "title", "text"]
  props: {
    skills: {
      type: Array
    },
    type: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    }
  },

  components: {
    Modal,
    Button,
    ico_right
  },

  data() {
    return {
      showModal: false,
      postItem: ""
    };
  },

  openModal(skill) {
    this.postItem = skill;
    this.showModal = true;
  },

  methods: {
    openModal(skill) {
      this.postItem = skill;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" module>
.slidewide {
  margin: auto;
  padding: 0;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  margin-bottom: 32px;

  &__wrap {
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

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
    text-align: center;
    margin-bottom: 40px;
    margin-right: 1.6rem;
    background: $white;
    @include radius;
    overflow: hidden;
    padding: 1.2em 2em;
    width: 100%;
    min-width: 300px;
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
      height: 200px;
    }

    &__list {
      min-width: auto;
      margin-bottom: 0;
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

<style lang="scss">
.is-modal {
  overflow-y: hidden;
}
.button {
  transition: 0.3s ease 0s;
  font-size: 1.3rem;
  position: relative;

  &__primary {
    background: $primary;
    height: 40px;
    letter-spacing: 0.05em;
    font-weight: 700;
    color: $text100;
    line-height: 0;
    border: none;
    cursor: pointer;
    @include radius;
    min-width: 120px;

    &:hover {
      background: darken($primary, 8%);
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

    &:hover {
      background: $primary;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: initial;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @include md {
    &__primary {
      max-width: 420px;
      min-width: 120px;
      width: 100%;
    }
  }
}
</style>