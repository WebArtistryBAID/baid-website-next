import { createRouter, createWebHistory } from 'vue-router'

const prefix = '/:lang(zh-CN|en-US)'

export const routes = [
    {
        path: prefix,
        name: 'HomePage',
        component: () => import('./views/HomePage.vue'),
        meta: {
            headerAnimate: true
        }
    },
    {
        path: prefix + '/about',
        name: 'AboutUs',
        component: () => import('./views/AboutUs.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/education',
        name: 'EducationTeaching',
        component: () => import('./views/EducationTeaching.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/life',
        name: 'StudentLife',
        component: () => import('./views/StudentLife.vue'),
        meta: {
            headerAnimate: true
        }
    },
    {
        path: prefix + '/join',
        name: 'JoinUs',
        component: () => import('./views/JoinUs.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/news',
        name: 'NewsPage',
        component: () => import('./views/NewsPage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/news/:year/:month/:day/:title',
        name: 'ArticlePage',
        component: () => import('./views/ArticlePage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./views/NotFound.vue'),
        meta: {
            headerAnimate: false
        }
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
