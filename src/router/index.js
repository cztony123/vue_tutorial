
import Vue, { reactive } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
	    path: '/login',
	    name: 'login',
	    component: () => import('../views/login/index.vue'),
	},
    {
        path: '/',
        name: 'Layout',
		redirect: "/home",
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: "/home",
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta:{
                    title:"首页"
                }
            }, 
            {
                path: "/sort",
				name: 'sort',
                component: () => import('@/views/sort/index.vue'),
                meta:{
                    title:"分类"
                }
            },
            {
                path: "/masterTea",
				name: 'masterTea',
                component: () => import('@/views/masterTea/index.vue'),
                meta:{
                    title:"大师茶"
                }
            },
            {
                path: "/cart",
				name: 'cart',
                component: () => import('@/views/cart/index.vue'),
                meta:{
                    title:"购物车"
                },
            },
            {
                path: "/my",
				name: 'my',
                component: () => import('@/views/my/index.vue'),
                meta:{
                    title:"我的"
                }
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
