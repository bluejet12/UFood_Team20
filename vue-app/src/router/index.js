// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Homepage.vue'; // Update path as needed
import AuthLogin from '@/components/Authentification/AuthLogin.vue';
import AuthRegister from '@/components/Authentification/AuthRegister.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import ResturantPage from "@/components/ResturantPage.vue";
// Define your routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    { path: '/login', name: 'login', component: AuthLogin },
    { path: '/register', name: 'register', component: AuthRegister },

    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
        meta: { requiresAuth: true },
    },
    {
        path: '/restaurant/:id',
        name: 'restaurant',
        component: ResturantPage,
        props: true,
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
