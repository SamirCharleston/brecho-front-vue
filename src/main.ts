import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from "axios";

const vuetify = createVuetify({
    components,
    directives,
    // icons: {
    //     defaultSet: 'fa',
    //     aliases,
    //     sets: {
    //         fa,
    //     },
    // }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
