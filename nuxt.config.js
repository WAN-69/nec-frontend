export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NEC",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      // favicon ws diganti tappi gambare gepeng kik,masih butuh penyesuaian. baka pen coba tinggal ganti bae sizes'e atau dihapus bae.
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "32x3",
        href: "/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/tw-element", mode: "client" },
    { src: "@/plugins/lodash", mode: "client" },
    { src: "@/plugins/vee-validate", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-vite", "@nuxt/postcss8",'@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    ['nuxt-tailvue', {
      all: true,
      toast:{
        defaultProps: { 
          timeout: 5,
        } 
      }
    }],
  ],

  // Auth With NuxtAuth JWT
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "login", method: "post", propertyName: "access_token" },
          user: { url: "user-profile", method: "get", propertyName: "user" },
          logout: false,
        },
      },
    },
    redirect: {
      login: "/auth/login",
      // logout: "/auth/login",
      callback: "/admin/dashboard",
      home: "/admin/dashboard",
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://api-nec.test/api",
    proxy: true,
  },

  proxy: {
    "/api/": {
      target: "http://api-nec.test/api",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },

  router: {
    routeNameSplitter: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    // Add exception
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      
    },
  },

  // Config Lodash
  lodash: {
    prefix: "use",
    prefixSkip: ["is"],
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => useStringToCamelCase
      ["kebabCase", "stringToKebabCase"], // => useStringToKebabCase
    ],
  },

  // Loading bar
  loading: {
    color: "blue",
    height: "2px",
    throttle: 0,
  },

  loadingIndicator: {
    name: "three-bounce",
    color: "#3B8070",
    background: "white",
  },

  // Transition
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  layoutTransition: "fade",

  // Font
  googleFonts: {
    families: {
      'DM Sans': true,
    }
  }
};
