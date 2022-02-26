import { createRouter, createWebHistory } from 'vue-router';

import FormTemplate from "../formBuilder/FormTemplate.vue"
import { appAuthRoutes } from '../formBuilder';

import controllerRoutes from '../main/controller/controllerRoute';
import adminRoutes from '../main/admin/adminRoute';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: FormTemplate },
        ...appAuthRoutes, ...controllerRoutes, ...adminRoutes


    ]
});

export default router