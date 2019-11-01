<template lang="pug">
- var img_path = '@/assets/images/top/'

article
  //- hero
  div(:class="$style.hero")
    div(:class="$style.hero__block",v-scroll="handleScroll")
      div(:class="$style.hero__info")
        h1(:class="$style.hero__logo")
          //- img(src="@/assets/images/svg/logo.svg", alt="naomoon")
          | Naomoon
          span Design &#38; Frontend
        p(:class="$style.hero__text") aaaaaaaaaaaaaaaaaaaaaaaaaaaa
      div(:class="$style.hero__imgcontainer")
        //- picture
        //-   source(media="(min-width: 1000px)" srcset="@/assets/images/top/hero_bg_pc.jpg")
        //-   source(media="(min-width: 480px)" srcset="@/assets/images/top/hero_bg_sp.jpg")
        //-   img(src="@/assets/images/top/hero_bg_sp.jpg", alt="")

        div(:class="$style.hero__scroll",v-scroll="handleScroll")
          <svg version="1.1" id="Mouse" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 130 231" enable-background="new 0 0 130 231" xml:space="preserve">
            <g>
              <path fill="#7F7F7F" d="M72.5,231h-15C25.794,231,0,205.206,0,173.5v-116C0,25.794,25.794,0,57.5,0h15 C104.206,0,130,25.794,130,57.5v116C130,205.206,104.206,231,72.5,231z M57.5,5C28.551,5,5,28.551,5,57.5v116 C5,202.448,28.551,226,57.5,226h15c28.948,0,52.5-23.552,52.5-52.5v-116C125,28.551,101.448,5,72.5,5H57.5z" />
            </g>
            <g id="mouse-circle">
              <circle fill-rule="evenodd" clip-rule="evenodd" fill="#7F7F7F" cx="65" cy="42.834" r="12.5" />
            </g>
          </svg>

  //-consept
  section.maxWidth(:class="$style.concept ",v-scroll="handleScroll")
    Title(title='Desgin & Frontend')
    p(:class="$style.concept__text")
      | デザインとフロントエンドが好き
      br
      | デザインとフロントエンドが好きデザインとフロロントエンドが好きデザインとフロロントエンドが好き
      br
      | デザインとフロントエンドが好きデザインとフロロントエンドが好きデザインとフロロントエンドが好き
    div(:class="$style.concept__catch")
      div(:class="$style.concept__catch__container")
        div(:class="$style.concept__catch__img")

  //-skill
  section(:class="$style.skill")
    Title(title='skill')
    SlideWide(v-bind:skills="skills")
    section(:class="$style.skillmap")
      h4(:class="$style.skillmap__title")
        |  使用可能ツール
      ul(:class="$style.skillmap__list")
        li(v-for="skillmap in skillmaps" :key="skillmap.id") {{skillmap}}

  //-profile
  div(:class="$style.profile")
    section(:class="$style.profile__block")
      Title(title='nao')
      p(:class="$style.profile__text")
        | あああああああああああああああああああああああああああああああああああああああああああああああ
        br
        | あああああああああああああああああああああああああああああああああああああああああああああああ
      a(href="https://twitter.com/yamanayama" target="_blank")
        ico_twitter

  //-portfolio
  div(:class="$style.portfolio")
    section(:class="$style.portfolio__block")
      Title(title='portfolio')
      p(:class="$style.profile__text") お尋ねください。
      nuxt-link(v-scroll-to='"#contact"' to) お問い合わせへ

  //-contact
  section#contact(:class="$style.contact")
    Title(title='contact')
    p(:class="$style.profile__text") お急ぎの方はSNSからお願いします。

</template>

<script>
import Forms from "~/components/organisms/Forms.vue";
import Title from "~/components/atoms/title/index.vue";
import SlideWide from "~/components/organisms/slidewide/index.vue";
import ico_twitter from "@/assets/images/svg/ico_twitter.svg";
// import Subtitle from "~/components/atoms/subtitle/index.vue";

export default {
  head: {
    title: "Naomoon"
  },

  components: {
    Forms,
    Title,
    SlideWide
  },

  data: function() {
    return {
      skills: [
        {
          id: require("@/assets/images/top/skill_01.jpg"),
          title: "Design",
          text:
            "ワイヤー制作、UI設計、ユーザーインタビュー、LPO、デザインガイドライン作成など幅広く対応できます。受託制作でCMSデザインを経験し、インハウスでサービスUI、LPOでPDCAを回しながら、スタートアップならではDPCAも展開中です。UX勉強中。"
        },
        {
          id: require("@/assets/images/top/skill_02.jpg"),
          title: "Cording",
          text:
            "マークアップ、スタイルからCSSアニメーション、JSフレームワーク制作まで行います。セマンティックで秩序あるコーディングを行います。アクセシビリティやりたい勢です。"
        },
        {
          id: require("@/assets/images/top/skill_03.jpg"),
          title: "Marketing",
          text: "GAなどの解析"
        },
        {
          id: require("@/assets/images/top/skill_04.jpg"),
          title: "Illustration",
          text: "イラスト"
        }
      ],
      skillmaps: [
        "Photoshop",
        "XD",
        "Illustrator",
        "HTML/CSS",
        "Pug",
        "Sass",
        "Git",
        "Gulp",
        "jQuery",
        "WordPress",
        "React",
        "Vue(Nuxt)",
        "SpriteStudio"
      ]
    };
  },
  computed: {
    limitCount() {
      return this.skill.slice(0, 3);
    }
  },

  methods: {
    handleScroll: function(evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      return window.scrollY > 100;
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/scss/config/scrollicon";
$quantity: 15;
$imgPath: "../assets/images/top/";

/* hero
----------------------------------------------*/
article {
  width: 96%;
  margin: auto;
}

.hero {
  position: relative;
  align-items: center;
  height: 90vh;
  width: 100%;
  min-height: 720px;
  max-height: 1080px;
  z-index: 10;
  background: url("#{$imgPath}hero_bg_pc.jpg") no-repeat center center/cover;

  &__block {
    display: flex;
    position: relative;
    height: 100%;
  }

  &__info {
    background: $bg100;
    color: $white;
    text-align: center;
    font-size: 2.4rem;
    @include centerF;
    flex-direction: column;
    height: 100%;

    span {
      display: block;
      font-size: 1.6rem;
    }
  }

  &__img {
    width: 50vw;
  }

  &__text {
    font-size: 1vw;
    line-height: 2.25;
  }

  &__scroll {
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    span {
      font-size: 2rem;
    }
  }
}

h1 {
  font-size: 4rem;
  font-family: $fontFamilyEng200;
  font-weight: 400;
  text-transform: uppercase;
}

//tab
@include md {
  article {
    width: 100%;
  }

  h1 {
    font-size: 6rem;
  }
}

/* concept
----------------------------------------------*/
.concept {
  margin: auto;
  @include secP;
  @include inView;

  &__text {
  }
}

//tab
@include md {
  .concept {
    @include maxW;
    width: 100%;

    &__text {
      text-align: center;
    }
  }
}

//pc
@include lg {
}

/* skill
----------------------------------------------*/
.skill {
  margin: auto;
  @include secP;
}

//tab
@include md {
  .skill {
  }
}

/* profile
----------------------------------------------*/
.profile {
  margin: auto;
  @include secP;
  background: $bg200 url("#{$imgPath}profile_bg.jpg") no-repeat center
    right/contain;

  &__block {
    width: 450px;
    background: $bg100;
    padding: 24px;
  }
}

//tab
@include md {
  .profile {
  }
}

/* portfolio
----------------------------------------------*/
.portfolio {
  margin: auto;
  overflow: hidden;
  @include secP;
  background: $bg200 url("#{$imgPath}portfolio_bg.jpg") no-repeat center
    center/cover;

  &:hover {
    transition: transform 0.5s linear;
  }
}

//tab
@include md {
  .portfolio {
  }
}

.links {
  padding-top: 15px;
}
</style>
