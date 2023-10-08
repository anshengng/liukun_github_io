import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../view/Home.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;