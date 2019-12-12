/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Quotes from "@/views/Quotes.vue";
import About from "@/views/About.vue";
import Constitution from "@/views/Constitution.vue";

Vue.use(Router);


//instantiating the routes of the web-page
const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [ 
    {
        path: "*",
        redirect: "/" //Redirects Home if link is not recognised
    },
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/Quotes",
        name: "quotes",
        component: Quotes,
    },
    {
        path: "/About",
        name: "about",
        component: About,
    },
    {
        path: "/Constitution",
        name: "constituiton",
        component: Constitution,
    }
    ]
})


export default router;