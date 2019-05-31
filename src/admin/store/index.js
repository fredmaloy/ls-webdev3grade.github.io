import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

import categories from './modules/categories';
import skillsAdd from './modules/skills';
import user from './modules/user';
import reviews from './modules/reviews';

export default new vuex.Store({
    modules: {
      categories, skillsAdd, user, reviews
    }
});
      