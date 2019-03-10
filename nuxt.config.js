module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'maket1',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },

            // slick
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css' },
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
            // slick
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js' },
        ]
    },
    plugins: ['~/plugins/vuetify.js', { src: "~/plugins/aos", ssr: false }, ],
    css: ['~/assets/style/app.styl'],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    // loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}