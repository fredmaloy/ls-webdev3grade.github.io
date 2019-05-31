export default {
    
    namespaced: true,
   
    state: {
        reviews: []
    },

    mutations: {
        SET_REVIEW: (state, reviews) =>  {
            state.reviews = reviews
        },
        
        REMOVE_REVIEW: (state, removeReview) => {
            state.reviews = state.reviews.filter(review => review.id !== removeReview);
        }
    },

    actions: {
        async createReview(store, review) {
            try {

              const formData = new FormData();

              formData.append('photo', review.photo);
              formData.append('author', review.author);
              formData.append('occ', review.occ);
              formData.append('text', review.text);

              this.$axios.post("/reviews", formData);

            } catch (error) {
                alert('произошла ошибка при отправке данных на сервер');
            }
        }, 
        
        async fetchReviews({commit}, review) {
            try {
                const response = await this.$axios.get('./reviews/94');
                commit('SET_REVIEW', response.data);
                return response;
            } catch (error) {
                alert('Протизошла ошибка на стадии мутации при создании отзывов')
            }
        },

        async removeReview({commit}, reviewid) {
            try {
                const response = await this.$axios.delete(`./reviews/${reviewid}`);
                commit('REMOVE_REVIEW', reviewid);
                return response;
            } catch (error) {
                alert('Протизошла ошибка на стадии мутации при удалении отзывов')
            }
        },

        async editedReview(store, review) {
            try {
    
                const formData = new FormData();

                formData.append('photo', review.photo);
                formData.append('author', review.author);
                formData.append('occ', review.occ);
                formData.append('text', review.text);

                this.$axios.post(`./reviews/${review.id}`, formData);

            } catch (error) {
                alert('Протизошла ошибка на стадии мутации при исправлении отзывов')
            }
        },
    }   
}