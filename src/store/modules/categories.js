export default {
    
    namespaced: true,
   
    state: {
        categories: []
    },

    mutations: {

        MOVE_CATEGORIES: (state, skillsAdd) =>  {
            state.skillsAdd = skillsAdd
        }

    },

    actions: {
    
        async fetchCategories({commit}, category) {
            try {
                const response = await this.$axios.get(`/categories/94`);
                commit('MOVE_CATEGORIES', response.data);
                return response
            } catch (error) {
                
            }
        },
        
    }   
}