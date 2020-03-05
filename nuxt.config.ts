import bodyParser from 'body-parser';

const port = process.env.NUXT_PORT || 3100;
const host = process.env.NUXT_HOST || '0.0.0.0';
const isDev = process.env.NODE_ENV === 'development';
const backendHost = (() => {
  const host = process.env.BACKEND_HOST || 'http://localhost';
  const port = process.env.BACKEND_PORT || 3101;
  return `${host}:${port}`;
})();
import path from 'path';

import {Configuration} from "@nuxt/types";

const nuxtConfig: Configuration = {
  mode: 'universal',
  buildModules: [ '@nuxt/typescript-build' ],
  server: {
    host,
    port,
  },
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`,
  },
  srcDir: 'src',
  ...(process.env.NUXT_BUILD_DIR
    ? {buildDir: process.env.NUXT_BUILD_DIR}
    : {}),
  head: {
    title: 'nuxt.js with typescript',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'},
    ],
    link: [ {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'} ],
  },
  loading: {color: '#3B8070'},
  css: [
    'boxicons/css/boxicons.min.css',
    '~/assets/styles/theme.styl'
  ],
  build: {
    extractCSS: !isDev,
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
    extend(config, {isClient}) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
      // resolve: {
      //   alias: {
      //     'vue': path.resolve('./node_modules/vue')
      //   }
      // },
      config.resolve.alias['vue'] = path.resolve('./node_modules/vue')
    },
    babel: {
      plugins: [
        [ "@babel/plugin-proposal-decorators", {legacy: true} ],
        [ "@babel/plugin-proposal-class-properties", {loose: true} ]
      ]
    },

  },
  // watch: [ '~/serverMiddleware/*.ts' ],
  hooks: {
    ready: (nuxt: any) => {
      process.on('SIGINT', () => {
        // eslint-disable-next-line no-console
        console.log('received sigint signal');
        nuxt.close(() => {
          process.exit(0);
        });
      });
    },
    listen: () => {
      if (typeof process.send === 'function') {
        // eslint-disable-next-line no-console
        console.log('process send ready');
        process.send('ready');
      }
    },
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // },
  plugins: [
    // '~/plugins/axios_cookie_proxy.ts',
    // {src: '~/plugins/external_lib_import.ts', ssr: false},
    {src: '~/plugins/veeValidate.ts', ssr: true},
    {src: '~/plugins/caixie.ts', ssr: true}
  ],
  router: {
    // middleware: [ 'auth' ],
  },
  serverMiddleware: [],
}

module.exports = nuxtConfig
