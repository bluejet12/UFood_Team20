// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; // Update path as needed
import AuthLogin from '@/components/Authentification/AuthLogin.vue';
import AuthRegister from '@/components/Authentification/AuthRegister.vue';
import User from '@/components/User.vue';
import Restaurant from "@/components/Restaurant.vue";
// Define your routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    { path: '/login', name: 'login', component: AuthLogin },
    { path: '/register', name: 'register', component: AuthRegister },

    {
        path: '/profile',
        name: 'profile',
        component: User,
        meta: { requiresAuth: true },
    },
    {
        path: '/restaurant/:id',
        name: 'restaurant',
        component: Restaurant,
        props: true,
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
