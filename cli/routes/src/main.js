import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Home from "./components";
import NotFound from "./components/404.vue";
import Article from "./components/Articles/article";

const app =  createApp(App);

const theData = (route) => {
    console.log(route)
    return {
        myProp: route.path + ' Meow'
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home },
        {path: '/articles', component: Articles, children: [
            {path: ':id', component: Article, props: theData },
        ] },
        // {path: '/article/:id', component: Article, props: theData },
        {path: '/contact', component: Contact  },
        // {path: '/contact', redirect: '/'  },
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active'
})

app.component('app-header',Header);
app.component('app-footer',Footer);
 
app.use(router)
app.mount('#app')
