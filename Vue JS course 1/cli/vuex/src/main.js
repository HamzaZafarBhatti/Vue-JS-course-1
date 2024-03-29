import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Router from './routes';
const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 7
        }
    },
    mutations: {
        increment(state, payload) {
            if (payload) {
                state.counter += payload.value
            } else {
                state.counter++;
            }
        },
        decrement(state, payload) {
            if (payload) {
                state.counter -= payload.value
            } else {
                state.counter--;
            }
        }
    }
})

app.component('app-header', Header);
app.component('app-footer', Footer);
app.use(Router);
app.use(store);
app.mount('#app')
