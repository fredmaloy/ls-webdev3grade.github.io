<template lang="pug">
    section.content__section    
        .content__headline
            h1.headline__second-grade Блок &laquoОтзывы&raquo
        //pre {{reviews}}
        .content__work-space__feedback
            ul.works
                li.works__item(
                    v-for='review in reviews'
                )           
                    reviewsItem(
                       :review='review'    
                    )  
                li.works__item
                    button(
                        type='button',
                        @click.prevent="showReviewsAdding = true"
                    ).add__item-btn
                        .add__item-btn__icon
                        .add__item-btn__title Добавить отзыв
            reviewsAdd(
                v-if='showReviewsAdding',
                @cancelReviewsAdding='showReviewsAdding = false'
            ) 
</template>     


<script>

import { mapState, mapActions } from "vuex";

export default {

    data() {
        return {
            showReviewsAdding: false,
        }
    },
    
    components: {
        reviewsAdd: () => import('components/reviews-add.vue'),
        reviewsItem: () => import('components/reviews-item.vue'),
    },

    computed: {
        ...mapState('reviews', {
            reviews: state => state.reviews
        }),
    },
    
    methods: {

        ...mapActions('reviews', ['fetchReviews']),
       
        addingReview(review) {
            this.reviews.push(review);
        },

    },

    async created() {

        try {
            await this.fetchReviews();
        } catch (error) {
            alert('произошла ошибка при создании отзывов')            
        }

    }
}

</script>
