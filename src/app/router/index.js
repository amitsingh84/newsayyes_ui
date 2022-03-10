import { createRouter, createWebHistory } from 'vue-router';

import FormTemplate from "../formBuilder/FormTemplate.vue"
import { appAuthRoutes } from '../formBuilder';

import controllerRoutes from '../main/controller/controllerRoute';
import adminRoutes from '../main/admin/adminRoute';
import dataSubjectRoutes from '../main/data-subject/DataSubjectRoute';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: FormTemplate },
        ...appAuthRoutes, ...controllerRoutes, ...adminRoutes,...dataSubjectRoutes


    ]
});

export default router