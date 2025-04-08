import { createRouter, createWebHistory } from 'vue-router'

const clientType =
    navigator.userAgent.toLowerCase().indexOf('mobile') > -1
        ? 'mobile'
        : 'desktop'

const prefix = '/:lang(zh-CN|en-US)'

export const routes = [
    {
        path: prefix,
        name: 'HomePage',
        component: () => import(`./views/${clientType}/HomePage.vue`),
        meta: {
            headerAnimate: true
        }
    },
    {
        path: prefix + '/about',
        name: 'AboutUs',
        component: () => import(`./views/${clientType}/AboutUs.vue`),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/education',
        name: 'EducationTeaching',
        component: () => import(`./views/${clientType}/EducationTeaching.vue`),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/life',
        name: 'StudentLife',
        component: () => import(`./views/${clientType}/StudentLife.vue`),
        meta: {
            headerAnimate: true
        }
    },
    {
        path: prefix + '/join',
        name: 'JoinUs',
        component: () => import(`./views/${clientType}/JoinUs.vue`),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/news',
        name: 'NewsPage',
        component: () => import(`./views/${clientType}/NewsPage.vue`),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/news/:year/:month/:day/:title',
        name: 'ArticlePage',
        component: () => import(`./views/${clientType}/ArticlePage.vue`),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(`./views/${clientType}/NotFound.vue`)
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})
