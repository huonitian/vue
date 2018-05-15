import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/city',
            name: 'city',
            component: City,
            meta: {
                title: '列表'
            }
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
            meta: {
                title: '详情'
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})