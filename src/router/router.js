import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Register from "@/views/Register";


const routes = [
        { path: '/', component: Home, alias: '/' },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
    ]

    const router = createRouter({
        routes,
        history: createWebHistory(process.env.BASE_URL)
    })
export default router