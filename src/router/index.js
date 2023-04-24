import { createRouter, createWebHistory } from "vue-router";
const routes =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        { 
            path: "/",
            component: () => import("../views/Home.vue")  
        },
        {
            path: "/employee",
            component: () => import("../views/Employee.vue")
        }
    ]
});

export default routes;