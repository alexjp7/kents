/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Quotes from "@/views/Quotes.vue";
import Constitution from "@/views/Constitution.vue";
import TicTac from "@/components/Board.vue";

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
        path: "/Constitution",
        name: "constituiton",
        component: Constitution,
    },
    {
        path: "/tictac",
        name: "tictac",
        component: TicTac,
    }
    ]
})


export default router;