export default {
    
    namespaced: true,
   
    state: {
        categories: []
    },

    mutations: {
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories
        },

        ADD_CATEGORIES: (state, newCategories) => {
            state.categories = state.categories.filter(category => category.id !== removeCategories);
        },

        REMOVE_GROUP: (state, removeCategory) => {
            state.categories.shift(removeCategory)
        },

        EDIT_NAME_GROUP: (state, editNameGroup) => {
            state.categories = state.categories.map(
                category => category.id === editNameGroup.id ? editNameGroup : category 
            )
        }
    },
   
    actions: {
        
       async addNewSkillGroup({commit}, groupTitle) {
           try {
            const response =  await this.$axios.post('./categories', {
                title: groupTitle
            });
            commit('ADD_CATEGORIES', response.data);
            return response;
           } catch (error) {
               throw new error(
                   error.response.data.error || error.response.data.message
                   );
           }
       },

       async fetchCategories({commit}, groupTitle) {
           try {
            const response =  await this.$axios.get('./categories');
            commit('SET_CATEGORIES', response.data);
            return response;
           } catch (error) {
               throw new error(
                   error.response.data.error || error.response.data.message
                   );
           }
       },

       async removeSkillGroup({commit}, categoryid) {
           try {
               const response = await this.$axios.delete(`./categories/${categoryid}`);
               commit('REMOVE_GROUP', categoryid);
               return response;
           } catch (error) {
               
           }
       },

       async editNameGroup({commit}, category) {
           try {
               const response = await this.$axios.post(`/categories/${category.id}`, category);
               commit('EDIT_NAME_GROUP', response.data.category);
               return response;
           } catch (error) {
               
           }
       }
    }
}