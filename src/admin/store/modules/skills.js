    export default {
    
    namespaced: true,
   
    state: {
        skillsAdd: []
    },

    mutations: {
        SET_SKILLS: (state, skillsAdd) =>  {
            state.skillsAdd = skillsAdd
        },

        ADD_SKILL: (state, newSkill) => {
            state.skillsAdd.unshift(newSkill);
        },

        DELETE_SKILL: (state, removeSkill) => {
            state.skillsAdd = state.skillsAdd.filter(skill => skill.id !== removeSkill);
        },

        EDIT_SKILL: (state, aditedSkill) => {
            state.skillsAdd = state.skillsAdd.map(
                skill => skill.id === aditedSkill.id ? aditedSkill : skill
            );
        }
    },

    actions: {
        async addSkills({commit}, skill) {
            try {
                const response = await this.$axios.post('/skills', skill);
                commit('ADD_SKILL', response.data);
                return response
            } catch (error) {
                
            }
        },

        async fetchSkills({commit}, skill) {
            try {
                const response = await this.$axios.get(`/skills/94`, skill);
                commit('SET_SKILLS', response.data);
                return response
            } catch (error) {
                
            }
        },
        async removeSkills({commit}, skillid) {
            try {
                const response = await this.$axios.delete(`/skills/${skillid}`);
                commit('DELETE_SKILL', skillid);
                return response
            } catch (error) {
                
            }
        },
        async editedSkills({commit}, skill) {
            try {
                const response = await this.$axios.post(`/skills/${skill.id}`, skill);
                commit('EDIT_SKILL',  response.data.skill);
                return response;
            } catch (error) {
                
            }
        }
    }   
}