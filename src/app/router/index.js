import { createRouter, createWebHistory } from 'vue-router';

import FormTemplate from "../formBuilder/FormTemplate.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: FormTemplate },


    ]
});

export default router