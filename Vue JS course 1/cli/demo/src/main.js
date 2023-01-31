import { createApp } from 'vue'
import App from "./App";
import AppHeader from './components/header_footer/Header'
import AppFooter from './components/header_footer/Footer'

const app = createApp(App)

app.directive('awesome', {
    created(el) {
        console.log('created')
        console.log(el.parentNode)
    },
    beforeMount(el, binding) {
        // console.log(el)
        // console.log(binding)
        console.log('beforeMount')
        console.log(el.parentNode)

        el.innerHTML = binding.value
        el.style.color = binding.arg ? binding.arg : (binding.modifiers.blue && 'blue')
        el.style.fontSize = binding.modifiers.big && '20px'
    },
    mounted(el, ) {
        console.log('mounted')
        console.log(el.parentNode)
    },
    beforeUpdate(el, binding) {
        console.log('before update')
        el.innerHTML = binding.value
    },
    updated() {
        console.log('updated')
    }
})
app.component('appHeader', AppHeader)
app.component('appFooter', AppFooter)

app.mount('#app') 