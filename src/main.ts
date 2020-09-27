import { createApp } from 'vue'
import App from './App.vue'

import { httpSymbol, useHttpConfig } from './composables/fetch'

const app = createApp(App)

app.provide(httpSymbol, useHttpConfig())

app.mount('#app')
