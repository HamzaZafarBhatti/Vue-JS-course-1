import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Home from "./components";
import Article from "./components/Articles/article";

const app =  createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home },
        {path: '/articles', component: Articles },
        {path: '/article/:id', component: Article },
        {path: '/contact', component: Contact },
    ],
    linkActiveClass: 'active'
})

app.component('app-header',Header);
app.component('app-footer',Footer);

app.use(router)
app.mount('#app')
