export default [
    {
        path: '/',
        component: () => import("../components/pages/section_about-me.vue"),
        meta: {
            title: "Блок «Обо мне»"
          }
    },

    {
        path: '/my_works',
        component: () => import("../components/pages/section_my-works.vue"),
        meta: {
            title: "Блок «Работы»"
          }
    },

    {
        path: '/reviews',
        component: () => import("../components/pages/section_reviews.vue"),
        meta: {
            title: "Блок «Отзывы»"
          }
    },

    {
        path: '/login',
        component: () => import("../components/pages/login.vue"),
        meta: {
            public: true
        }
    },


];
