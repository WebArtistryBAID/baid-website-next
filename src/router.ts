import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const prefix = '/:lang(zh-CN|en-US)'

export const routes = [
    {
        path: prefix,
        name: 'home',
        component: HomePage,
        meta: {
            headerAnimate: true
        }
    },
    {
        path: prefix + '/about',
        name: 'about',
        component: () => import('./views/AboutPage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/academics',
        name: 'academics',
        component: () => import('./views/AcademicsPage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/life',
        name: 'life',
        component: () => import('./views/LifePage.vue'),
        meta: {
            headerAnimate: true
        }
    },
    {
        path: prefix + '/admissions',
        name: 'admissions',
        component: () => import('./views/AdmissionsPage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/news',
        name: 'news',
        component: () => import('./views/NewsPage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: prefix + '/news/:year/:month/:day/:title',
        name: 'article',
        component: () => import('./views/ArticlePage.vue'),
        meta: {
            headerAnimate: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('./views/NotFoundPage.vue'),
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
