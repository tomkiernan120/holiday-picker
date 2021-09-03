export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Holiday Picker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    // https://firebase.nuxtjs.org/guide/getting-started
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBlRHldWj-nfR-Lt0mgUU0t0R_FCbrfbCU",
          authDomain: "holiday-38877.firebaseapp.com",
          projectId: "holiday-38877",
          storageBucket: "holiday-38877.appspot.com",
          messagingSenderId: "656243999249",
          appId: "1:656243999249:web:843121769e1a09f67ce7b0",
          measurementId: "G-E0V5645075"
        },
        services: {
          auth: true,
          firestore: false,
          functions: false,
          storage: false,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: false
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
        // Add plugin names as key and arguments as value
        // Install them before as dependencies with npm or yarn
        plugins: {
          // Disable a plugin by passing false as value
        },
        preset: {
          // Change the postcss-preset-env settings
          autoprefixer: {
            grid: true
          }
        }
      }
  },

  googleFonts: {
    families: {
      'Open+Sans': true,
    }
  }
};
