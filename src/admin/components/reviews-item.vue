<template lang="pug">
    .works__item-block(v-if='editMode===false')
        .works__item__block.reviews__block
            .works__item-user
                .works__item-user__pic(
                    :class="{'filled': this.review}",
                    :style="{'backgroundImage' : `url(https://webdev-api.loftschool.com/${review.photo})`}",
                    v-model="review.photo"
                )
                .works__item-user__info
                    .works__item-user__name {{review.author}}
                    .works__item-user__position {{review.occ}}
            .reviews__item-content
                p.works__item-paragraph {{review.text}}
            .item-control__btns
                button.control__btn(
                    ype='button',
                    @click.prevent='editMode=true'
                )
                    .control__btn-title Править
                    .btn-icon.edit
                button.control__btn(
                    type='button',
                    @click.prevent='removeExistedReview'
                )
                    .control__btn-title Удалить 
                    .btn-icon.delete 

    .works__item-block(v-else)
        .works__item__block.reviews__block
            .works__item-user
                .works__item-user__pic
                    label.load__photo
                        .load__photo-continer
                            input.load__photo-input(
                                type='file',
                                @change="editFotoForReview"
                            )
                            .load__photo-avatar
                                .load__photo-avatar__image(
                                    :class="{'filled': this.renderedPhotoUrlEdit.length}",
                                    :style="{'backgroundImage' : `url(${this.renderedPhotoUrlEdit})`}",
                                    v-model="review.photo"
                                )
                .works__item-user__info
                    input.form__block-input(
                            type="text", 
                            name="name", 
                            placeholder="",
                            v-model="review.author"
                            ) 
                    input.form__block-input(
                            type="text", 
                            name="position", 
                            placeholder="",
                            v-model="review.occ"
                            )
            .reviews__item-content
                textarea.form__block-textarea(
                    type="text", 
                    name="description", 
                    placeholder="",
                    v-model="review.text"
                    ) 
            .item-control__btns
                button.group__btn-ok(
                type='button',
                @click.prevent ='editReview'
                ) 
                button.group__btn_cancel(
                type='button',
                @click.prevent ='editMode=false'
                )                                                                          
</template>


<script>

import { mapState, mapActions } from "vuex";

export default {
     props: {
        review: Object,
        reviews: Object
    },

    data() {
        return {
            editMode: false,
            renderedPhotoUrlEdit: ""
        }
    },

    methods: {

        ...mapActions('reviews', ['removeReview', 'editedReview', 'fetchReviews']),


        async removeExistedReview() {
            try {
                await this.removeReview(this.review.id);
            } catch (error) {
                alert('не удалось удалить отзыв')
            }
        },
        
        async editReview() {
            try {
                await this.editedReview(this.review);  
                this.editMode = false;        
            } catch (error) {
                alert('произошла ошибка при редактировании отзыва')
            }; 

            try {
                await this.fetchReviews(this.reviews);
            } catch (error) {
                alert('произошла ошибка при редактировании отзыва')
            }
        },

        editFotoForReview(e) {

            const file = e.target.files[0];
            this.review.photo = file;

            const reader = new FileReader();

            try {
                reader.readAsDataURL(file);
                reader.onload = () => {
                this.renderedPhotoUrlEdit = reader.result;
                };
                console.log('выполнена Загрузка фото')
            } catch (error) {
                alert('произошла ошибка при загрузке фото');
            }

        }

    }
}

</script>

<style lang="postcss" scoped>

.load__photo-avatar__image {
    width: 3.4375rem;
    height: 3.4375rem;

    &:after {
        width: 2.4375rem;
        height: 2.4375rem;
    }
}

</style>