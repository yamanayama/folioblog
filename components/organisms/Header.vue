<template lang="pug">
  div(:id="$style.header")
    header(:id="$style.header")
      nuxt-link(to="/",:class="$style.header__title")
        ico_logo
      //- #nav__toggle
      //-   menu-btn(:class="{ menu_btn: true, open_: menuFlag }" @click.native="menuToggle")
        //- transition
        //-   .nav__spMenu(v-show="menuFlag":style="{ marginTop: headH }")
        //-     .menu_wrap Menuだよ

    aside(:id="$style.sidebar")
      #nav(:class="$style.nav")
        ul(:class="$style.nav__list")
          li(v-for="menuList of limitCount" :key="menuList.name",:class="$style.nav__item")
            nuxt-link(:to="menuList.url",:class="$style.nav__item__link") {{ menuList.name }}
        p(:class="$style.nav__sns")
          a(href="https://twitter.com/yamanayama" target="_blank")
            ico_twitter

</template>

<script>
import ico_twitter from "@/assets/images/svg/ico_twitter.svg";
import ico_logo from "@/assets/images/svg/logo.svg";

//menuボタンコンポーネント
const menuBtnComp = {
  template: `
    <div>
        <span class="menu_trigger">
            <span></span><span></span><span></span>
        </span>
    </div>
`
};

// //root
// const nav = new Vue({
//   el: "#nav",
//   data: {
//     menuFlag: false,
//     headH: "0px"
//   },
//   methods: {
//     menuToggle: function() {
//       //menuFlag切り替え
//       this.menuFlag = !this.menuFlag;
//     }
//   },
//   mounted: function() {
//     //headerの高さ取得
//     let h = document.getElementById("header").offsetHeight;
//     this.headH = h + "px";
//   },
//   components: {
//     "menu-btn": menuBtnComp
//   }
// });

export default {
  components: {
    ico_twitter,
    ico_logo
  },

  data: function() {
    return {
      menuList: [
        { url: "/", name: "home" },
        { url: "about", name: "about" },
        { url: "work", name: "work" },
        { url: "blog", name: "blog" }
      ]
    };
  },
  computed: {
    limitCount() {
      return this.menuList.slice(0, 4);
    }
  }
};
</script>

<style lang="scss" module>
[v-cloak] {
  display: none;
}

.menu {
  list-style: none;
  padding: 0;
  background-color: #eee;
  font-family: $fontFamilyEng200;

  li {
    display: inline-block;
    padding: var(--space-sm);
  }
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .header__title {
    padding: 20px;

    > svg {
      width: 120px;
      height: 40px;
    }
  }
}

.nav {
  &__item {
    font-family: $fontFamilyEng200;
    font-weight: 400;
    padding: 0 0 16px 0;
    text-transform: capitalize;
    line-height: 1;
  }

  &__sns {
    width: 32px;
    height: 32px;

    circle {
      fill: $bg100;
    }

    path {
      fill: $bg200;
    }
  }
}

#sidebar {
  position: fixed;
  top: 0;
  background: $white;
  color: $text100;
  text-align: left;
  z-index: 700;
  font-size: 1.6rem;
  letter-spacing: 0.05em;
  height: 100%;
}

@include md {
  #header {
  }

  #sidebar {
    padding: 32px 16px 24px;
    width: 130px;
    right: 0;
    top: 70px;
    height: auto;
    border-radius: 4px 0 0 4px;
    ul {
      padding: 0;
    }
  }
}

#global-nav {
  ul {
    list-style: none;
    margin-left: 0;
  }

  > ul > li {
    position: relative;
  }

  a {
    color: #033560;
    text-decoration: none;
    display: block;
    padding: 15px 0;
    transition: background-color 0.3s linear;
  }

  .sub-menu-nav {
    position: fixed;
    background: #033560;
    color: #fff;
    top: 0;
    padding-top: 90px;
    left: 260px;
    width: 0;
    height: 100%;
    overflow: hidden;
    transition: width 0.2s ease-out;

    a {
      width: 230px;
    }
  }

  .sub-menu:hover .sub-menu-nav {
    width: 230px;
  }
}

/* sub-menu */

/* nav-toggle */

#nav-toggle {
  display: none;
  position: fixed;
  top: 15px;
  right: 15px;
  height: 32px;
}

@media screen and (max-width: 900px) {
  #main-in {
    padding-left: 0;
  }

  #nav {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
  }

  #sidebar {
    position: fixed;
    right: -300px;
    top: 0;
    height: 100%;
    width: 300px;
    color: #333;
    background: #fff;
    transition: 0.35s ease-in-out;
  }

  /* サブメニューは開けない */

  #global-nav {
    .sub-menu-head:after,
    .sub-menu-nav {
      display: none;
    }
  }

  #nav-toggle {
    display: block;
  }

  /* nav open */

  .open {
    overflow: hidden;

    #overlay {
      display: block;
    }

    #sidebar {
      transform: translate3d(-300px, 0, 0);
    }

    #nav-toggle span {
      &:nth-child(1) {
        top: 11px;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        width: 0;
        left: 50%;
      }

      &:nth-child(3) {
        top: 11px;
        transform: rotate(-45deg);
      }
    }
  }

  /* #nav-toggle close */

  /* z-index */

  #sidebar {
    z-index: 300;
  }

  #nav-toggle {
    z-index: 400;
  }
}
</style>