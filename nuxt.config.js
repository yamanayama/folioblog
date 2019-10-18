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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js' }
    ]
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
    'nuxt-svg-loader'
  ],

  css: [
    // プロジェクト内の SASS ファイル
    { src: '@/assets/scss/style.scss', lang: 'scss' },
  ],

  styleResources: {
    scss: [
      '@/assets/scss/config/_colors.scss',
      '@/assets/scss/config/_preset.scss',
      '@/assets/scss/config/_variable.scss',
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
      }
    },

  }
};
