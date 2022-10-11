import { createApp } from 'vue'
import App from "./App";
import AppHeader from './components/header_footer/Header'
import AppFooter from './components/header_footer/Footer'

const app = createApp(App)

app.component('appHeader', AppHeader)
app.component('appFooter', AppFooter)

app.mount('#app') 