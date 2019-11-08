// const StylelintPlugin = require('stylelint-webpack-plugin');

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'naomoon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    bodyAttrs: {
      // class: 'body-style'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js' },
      { //adobe fonts
        innerHTML: `
          (function(d) {
            var config = {
              kitId: 'slt8asq',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
  ],

  plugins: [
    '~/plugins/vue-scrollto',
    '~/plugins/vue-mq',
    '~/plugins/scroll',
  ],

  css: [
    // プロジェクト内の SASS ファイル
    { src: '@/assets/scss/style.scss', lang: 'scss' },
  ],

  styleResources: {
    scss: [
      '@/assets/scss/config/_colors.scss',
      '@/assets/scss/config/_preset.scss',
      '@/assets/scss/config/_variables.scss',
      '@/assets/scss/config/_utility.scss'
    ],
  },

  rules: [
    {
      test: '\.vue$',
      loader: 'vue-loader',
      options: {
        cssModules: {
          localIdentName: '[path][name]---[local]---[hash:base64:5]',
          camelCase: true
        }
      }
    }
  ],
  /*
  ** Build configuration
  */

  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          // Doc: https://github.com/postcss/autoprefixer
          autoprefixer: { grid: true }
        },
      },
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
        // config.plugins.push(new StylelintPlugin({
        //   files: [
        //     '**/*.vue',
        //     '**/*.scss',
        //   ],
        // }));
      }
    },

  }
};
