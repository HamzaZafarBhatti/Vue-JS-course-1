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
import Notify from "./components/notify.vue";
import Login from "./components/login.vue";

const app = createApp(App);

const theData = (route) => {
    console.log(route)
    return {
        myProp: route.path + ' Meow'
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        // {path: '/articles', component: Articles, children: [
        //     {path: ':id', component: Article, props: theData },
        // ] },
        {
            path: '/articles', component: Articles,
            beforeEnter: () => {
                const isAuth = false
                if(!isAuth) {
                    return '/login'
                }
                return true
            }
        },
        { path: '/article/:id', component: Article, props: theData },
        // { path: '/contact', component: Contact, name: 'contact' },
        {
            path: '/contact', components: {
                default: Contact,
                notify: Notify
            }, name: 'contact'
        },
        // {path: '/contact', redirect: '/'  },
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/login', component: Login }
    ],
    linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//     console.log('before Each')
//     console.log(to)
//     console.log(from)
//     const isAuth = false
//     if (to.path === '/') {
//         next()
//     } else {
//         if (to.path !== '/login' && !isAuth) return next({ path: '/login' })
//         else if (to.path === '/login' && isAuth) return next({ path: '/' })
//         return next()
//     }
// })

// router.afterEach((to, from/* , next */) => {
//     console.log('afterEach')
//     console.log(to)
//     console.log(from)
// })

app.component('app-header', Header);
app.component('app-footer', Footer);

app.use(router)
app.mount('#app')
