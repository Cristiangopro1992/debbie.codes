const cloudinaryUrl =
  'https://res.cloudinary.com/debsobrien/image/upload/q_auto,f_auto'
const baseUrl = 'https://debbie.codes'

export default {
  target: 'static',
  env: {
    baseUrl: process.env.BASE_URL || baseUrl,
    API_HASURA_URL: 'https://debbie-codes.herokuapp.com/v1/graphql',
    cloudinaryPath: cloudinaryUrl,
    baseImage: cloudinaryUrl + '/',
    workshopImage:
      cloudinaryUrl +
      ',c_thumb,w_130,h_130/v1565547670/debbie.codes/workshops/',
    conferenceImage:
      cloudinaryUrl +
      ',c_thumb,w_130,h_130/v1565547670/debbie.codes/conferences/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Debbie Codes with NuxtJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          "Debbie O'Brien, Head of Learning and Developer Advocate for NuxtJS with over 10 years experience in Frontend development. Microsoft Most Valuable Professional in developer technologies, Google Developer Expert in web technologies and Cloudinary Media Developer Expert."
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        defer: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    '~/assets/styles/highlight.scss',
    '~/assets/styles/app.scss'
  ],
  styleResources: {
    scss: ['~/assets/styles/tokens.scss']
  },
  router: {
    linkExactActiveClass: 'text-primary'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/url-helpers.js',
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/vue-dompurify.js',
    '@/plugins/hasura.js'
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/color-mode'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxt/content',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-166062227-1'
      }
    ]
  ],
  content: {
    // Options
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)

        document.readingTime = time
      }
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  webfontloader: {
    google: {
      families: [
        'Saira:300&display=swap,400&display=swap,500&display=swap,600&display=swap,700&display=swap'
      ]
    }
  },
  generate: {
    fallback: true,
    exclude: [/code/, /^(?=.*\btest\b).*$/]
    // async routes() {
    //   const { $content } = require('@nuxt/content')
    //   const files = await $content()
    //     .only(['path'])
    //     .fetch()

    //   return files.map((file) => (file.path === '/index' ? '/' : file.path))
    // }
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
