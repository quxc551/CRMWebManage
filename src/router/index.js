import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/layouts/Empty.vue'),
        redirect: { name: 'Login' },
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import(/* webpackChunkName: "user" */ '@/views/Login/Login.vue'),
            },
            {
                path: 'password',
                name: 'Password',
                component: () => import(/* webpackChunkName: "user" */ '@/views/Login/Password.vue'),
            }
        ]
    },
    {
        path: '/manage',
        component: () => import(/* webpackChunkName: "layout" */ '@/layouts/Admin.vue'),
        children: [
            {
                path: 'users',
                name: 'Users',
                component: () => import(/* webpackChunkName: "user" */ '@/views/UserManagement/UserList.vue'),
            },
            {
                path: 'roles',
                name: 'Roles',
                component: () => import(/* webpackChunkName: "user" */ '@/views/UserManagement/Role.vue'),
            },
            {
                path: 'houses',
                name: 'HouseList',
                component: () => import(/* webpackChunkName: "Building" */ '@/views/Building/HouseList.vue'),
            },
            {
                path: 'buildings',
                name: 'BuildingList',
                component: () => import(/* webpackChunkName: "Building" */ '@/views/Building/BuildingList.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
