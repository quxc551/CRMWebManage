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
        children: [

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
            }
        ]
    }
]

const router = new VueRouter({
  routes
})

export default router
