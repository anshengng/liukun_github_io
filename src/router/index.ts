import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../view/Home.vue'),
    },
    {
        path: '/gpt3',
        component: ()=>import('../view/gpt3.5.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;