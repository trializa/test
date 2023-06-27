// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    options: {
      strict: true,
    },
  },
  content: {
    experimental: {
      clientDb: true
    }
  },


  routeRules: {
    '/':{static:true},
    '/**':{static:true},
    // Static page generated on-demand, revalidates in background
    '/english/**':  { static: true },//{ swr: true },
    // Static page generated on-demand once
    '/learning/**': { static: true },
    // Set custom headers matching paths
    /* '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // Render these routes with SPA
    '/admin/**': { ssr: false },
    // Add cors headers
    '/api/v1/**': { cors: true },
    // Add redirect headers
    '/old-page': { redirect: '/new-page' },
    '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }, */
  },


  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  modules: ['@nuxtjs/tailwindcss','@nuxt/content',
  ],

  
  define: {
    'global': {},
  },


  head: {
    titleTemplate: '%s - forfirenuxt',
    title: 'forfirenuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '~/japland.jpg' },
      { rel: 'icon', type: 'image/x-icon', href: '~/japland.jpg' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css' },
      //https://unpkg.com/tailwindcss@1.9.6/dist/tailwind.min.css
      //{ rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@1.9.6/dist/tailwind.min.css' },
      //https://cdn.com/bootstrap.css
      //{ rel: 'stylesheet', href: 'https://cdn.com/bootstrap.css' }
    ],
    
    script:[
//{type:'text/javascript',src:'jquery.js'},
       // {type:'text/javascript', src:'jquery.js'},
       { src:"https://code.jquery.com/jquery-3.6.3.min.js" , type:'text/javascript',defer:true,async:true },
     { src:'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js' , type:'text/javascript',defer:true,async:true },
     { src:'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js' , type:'text/javascript',defer:true,async:true },
     
     
    ]    
  },


/*css: [
    '~/assets/css/main.css',
  ],*/
ssr:true,
  target: 'static'
})
