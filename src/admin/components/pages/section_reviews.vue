<template lang="pug">
    section.content__section    
        .content__headline
            h1.headline__second-grade Блок &laquoОтзывы&raquo
        .content__work-space__feedback 
            section.editing
                h3.hedline__third-level.editing__hedline Новый отзыв
                .editing__content.feedback
                    .load__photo
                        .load__photo-continer
                            .load__photo-avatar
                                .load__photo-avatar__image
                            a.load__photo-hint(href="#") Добавить фото
                    .editing__feedback-data 
                        form.editing__feedback-form(action="#")
                            .editing__feedback-about__autor
                                label.editing__feedback-form__block
                                    .form__block-title Имя автора
                                    input.form__block-input(type="text", name="name", placeholder="Ведите имя автора")                      
                                label.editing__feedback-form__block
                                    .form__block-title Должность автора
                                    input.form__block-input(type="text", name="position", placeholder="Введите должность автора")                      
                            label.editing__feedback-form__block
                                .form__block-title Отзыв
                                textarea.form__block-textarea(type="text", name="description", placeholder="Оставьте короткий отзыв")                     
                .editing__btns-control.feedback
                    button.admin__btn
                        .admin__btn-title Сохранить
                    button.admin__btn.cancel-btn
                        .admin__btn-title Отмена
            section.works
                .add__item
                    button.add__item-btn
                        .add__item-btn__icon
                        .add__item-btn__title Добавить отзыв
                .works__item 
                    .works__item__block.reviews__block
                        .works__item-user
                            .works__item-user__pic
                                img.works__item-user__pic-image(src="../../../images/content/my_photo.png", alt="")
                            .works__item-user__info
                                .works__item-user__name Владимир Сабанцев
                                .works__item-user__position Препод
                        .reviews__item-content
                            p.works__item-paragraph Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .item-control__btns
                            button.control__btn
                                .control__btn-title Править
                                .btn-icon.edit
                            button.control__btn
                                .control__btn-title Удалить 
                                .btn-icon.delete
</template>
