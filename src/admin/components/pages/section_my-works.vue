<template lang="pug">
    section.content__section  
        .content__headline
            h1.headline__second-grade Блок &laquoРаботы&raquo
        .content__work-space__my-works 
            section.editing
                h3.hedline__third-level.editing__hedline Редактирование Работы
                .editing__content.my-works
                    .load__image
                        .load__image-continer
                            .load__image-hint Перетащите или загрузите изображение
                            button.admin__btn
                                .admin__btn-title Загрузить
                    .site__info
                        form.editing__work-form(action="#")
                            label.editing__work-form__block
                                .form__block-title Название 
                                input.form__block-input(type="text", name="title", placeholder="Ведите название работы")                      
                            label.editing__work-form__block
                                .form__block-title Ссылка
                                input.form__block-input(type="text", name="link", placeholder="Вставьте ссылку")                      
                            label.editing__work-form__block
                                .form__block-title Описание
                                textarea.form__block-textarea(type="text", name="description", placeholder="Опишите кратко работу")                      
                        form.editing__work-form(action="#")   
                            label.editing__work-form__block
                                .form__block-title Добавление тэга
                                input.form__block-input(type="text", name="tag", placeholder="Введите название тэгов через запятую")
                            .skills__tags 
                                ul.skills__tags-list
                                    li.skills__tags-elem 
                                        .tag HTML
                                        a.delete__tag                    
                .editing__btns-control
                    button.admin__btn
                        .admin__btn-title Сохранить
                    button.admin__btn.cancel-btn
                        .admin__btn-title.cancel__title Отмена
            section.works
                .add__item
                    button.add__item-btn
                        .add__item-btn__icon
                        .add__item-btn__title Добавить работу
                .works__item 
                    .works__item__block
                        img.works__item-pic__image(src="../../../images/content/slider_bg1.jpg", alt="")
                        .works__item-content
                            h3.hedline__third-level.works__item__headline Продажа сухарей 
                            p.works__item-paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit molestias nihil, laudantium ipsa corrupti, accusamus repudiandae velit consequuntur ad aperiam asperiores suscipit facilis omnis ducimus ratione. Maiores, expedita dignissimos?
                            a.works__item-link(href="#") loftschooll
                        .item-control__btns
                            button.control__btn
                                .control__btn-title Править
                                .btn-icon.edit
                            button.control__btn
                                .control__btn-title Удалить 
                                .btn-icon.delete  
</template>
   