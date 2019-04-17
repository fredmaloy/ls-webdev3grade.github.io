import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about_me from './components/pages/section_about-me.vue';
import my_works from './components/pages/section_my-works.vue';
import reviews from './components/pages/section_reviews.vue';
import login from './components/pages/login.vue'

const routes = [
    {
        path: '/',
        component: about_me
    },

    {
        path: '/my_works',
        component: my_works
    },

    {
        path: '/reviews',
        component: reviews
    },

    {
        path: '/login',
        component: login
    },


];

export default new VueRouter({ routes });
