import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Signup from '../components/Signup'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/sign-up',
        name: 'Signup',
        component: Signup,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router