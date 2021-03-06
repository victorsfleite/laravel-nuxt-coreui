const pkg = require('./package');
require('dotenv').config();

module.exports = {
  mode: 'spa',

  router: {
    middleware: 'auth',
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'School4Home',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /**
   * Import CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    {
      src: '~/assets/scss/style.scss',
      lang: 'scss'
    }
  ],

  /*
   ** Import Plugin 
   */
  plugins: [{
    src: '~plugins/bootstrap-vue.js',
    ssr: true
  }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL || 'http://localhost:3000',
    progress: true,
  },

  toast: {
    position: 'top-right',
    duration: 2000
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    },
  },

  env: {
    apiUrl: process.env.API_URL || 'http://localhost:8080',
    apiToken: process.env.API_TOKEN,
  }
}
