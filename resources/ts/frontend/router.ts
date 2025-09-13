import { createRouter, createWebHistory } from "vue-router";


const getComponent = (file_name: string) => {
    return import(`./Pages/${file_name}Component.vue`);
}



const per_fix = "/app";
const setRoute = (url: string, name: string, path: string, permission: string | null) => {
    return {
        path: url,
        name: name,
        component: ()=> getComponent(path),
        meta: { permissions: permission ?? null },

    }
}

const routes = [
    {
        path: "/",
        redirect: { name: 'dashboard' }
    },
    setRoute('/:catchAll(.*)', '404', 'error/404', null),
    setRoute('/unauthorized/user', '401', 'error/401', null),
    setRoute('/', 'dashboard', 'home/Home', null),
    // {
    //     path: per_fix+'/dashboard',
    //     name: 'dashboard',
    //     component: import('./Pages/dashboard/DashbordComponent.vue'),
    //     meta: { permissions: '' ?? null },

    // }
   


]
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;