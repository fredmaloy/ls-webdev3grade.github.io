import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

import categories from './modules/categories'

export default new vuex.Store({
    modules: {
      categories
    }
  });
