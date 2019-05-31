<template lang="pug">
    section.editing
        h3.hedline__third-level.editing__hedline Новый отзыв
        .editing__content.feedback
            label.load__photo
                .load__photo-continer
                    input(
                        type='file',
                        @change="appendFileAndRenderPhoto"
                        ).load__photo-input
                    .load__photo-avatar
                        .load__photo-avatar__image(
                            :class="{'filled' : this.renderedPhotoUrl.length}",
                            :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}",
                            v-model="review.photo"
                        )
                    .load__photo-hint Добавить фото
            .editing__feedback-data 
                form.editing__feedback-form(action="#")
                    .editing__feedback-about__autor
                        label.editing__feedback-form__block
                            .form__block-title Имя автора
                            input.form__block-input(
                                type="text", 
                                name="name", 
                                placeholder="Ведите имя автора",
                                v-model="review.author"
                                )                      
                        label.editing__feedback-form__block
                            .form__block-title Должность автора
                            input.form__block-input(
                                type="text", 
                                name="position", 
                                placeholder="Введите должность автора",
                                v-model="review.occ"
                                )                    
                    label.editing__feedback-form__block
                        .form__block-title Отзыв
                        textarea.form__block-textarea(
                            type="text", 
                            name="description", 
                            placeholder="Оставьте короткий отзыв",
                            v-model="review.text"
                            )                     
        .editing__btns-control.feedback
            button.admin__btn(
                type="button",
                @click.prevent="reviewAdd"
            )
                .admin__btn-title Сохранить
            button.admin__btn.cancel-btn(
                    type="button",
                    @click.prevent="$emit('cancelReviewsAdding', cancelReviewsAdding)"
                )
                .admin__btn-title Отмена
</template>


<script>

import { mapState, mapActions } from "vuex";

export default {
    
    props: {
        reviews: Object
    },

    data() {
        return {
            renderedPhotoUrl: "",
            review: {
                photo: "",
                author: "",
                occ: "",
                text: ""
            }
        }
    },

    methods: {

        ...mapActions('reviews', ['createReview', 'fetchReviews']),

        appendFileAndRenderPhoto(e) {
            const file = e.target.files[0];
            this.review.photo = file;

            const reader = new FileReader();

            try {
                reader.readAsDataURL(file);
                reader.onload = () => {
                this.renderedPhotoUrl = reader.result;
                };
            } catch (error) {
                alert('произошла ошибка при загрузке фото');
            }

        },

        async reviewAdd() {
            try {
                await this.createReview(this.review);
                this.review.photo = "";
                this.review.author = "";
                this.review.occ = "";
                this.review.text = "";
                this.renderedPhotoUrl = "";                

            } catch (error) {
                alert('произошла ошибка при добавлении Отзыва')
            };

            try {
                await this.fetchReviews(this.review);
            } catch (error) {
                
            }

            
        }

    }
}

</script>
