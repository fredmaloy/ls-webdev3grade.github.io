<template lang="pug">
section.content__section      
    .content__headline
        h1.headline__second-grade Блок &laquoОбо мне&raquo
        a(href='#', title="Нажмите, чтобы добавить группу").section__about-me__add-group
            .add-group__icon                           
            .add-group__content Добавить группу 
    .content__work-space 
        ul.content__work-space__about-me__list
            li.content__work-space__about-me__elem
                .group-skills
                    form.group-skills__form(action="#")
                        .group-skills__form-headline
                            input.input.title-group__input(type="text", name="title-group", placeholder="Введите название новой группы")
                            .group__btn
                                button.group__btn-ok
                                button.group__btn_cancel
                        .group-skills__form-content      
                        .group-skills__form-add__skill
                            input.input.title__skill(type="text", name="title-skill", placeholder="Новый навык") 
                            input.input.percent__skill(type="text", name="title-skill", placeholder="100%")
                            button.add__skill__btn 
            li.content__work-space__about-me__elem
                .group-skills
                    form.group-skills__form(action="#")
                        .group-skills__form-headline
                            input.input.title-group__input(type="text", name="title-group", placeholder="Введите название новой группы")
                            .group__btn
                                button.group__btn-ok
                                button.group__btn_cancel
                        ul.group-skills__form-content__list
                            li.group-skills__form-content__elem
                                .form-content__title-skill GIT
                                .form-content__percent-skill 50%
                                .form-content__editing-btn 
                                    button.edit
                                    button.delete                            
                        .group-skills__form-add__skill
                            input.input.title__skill(type="text", name="title-skill", placeholder="Новый навык") 
                            input.input.percent__skill(type="text", name="title-skill", placeholder="100%")
                            button.add__skill__btn 
            li.content__work-space__about-me__elem
                .group-skills
                    form.group-skills__form(action="#")
                        .group-skills__form-headline
                            h2.form-headline Front End  
                            .group__btn
                            button.edit
                        ul.group-skills__form-content__list
                            li.group-skills__form-content__elem
                                .form-content__title-skill GIT
                                .form-content__percent-skill 50%
                                .form-content__editing-btn 
                                    button.edit
                                    button.delete                           
                            li.group-skills__form-content__elem
                                input.input.form-content__title-skill__edit(type="text", name="edit-skill", placeholder="") 
                                input.input.form-content__percent-skill__edit(type="text", name="edit-percent", placeholder="") 
                                .group__btn
                                    button.group__btn-ok
                                    button.group__btn_cancel                         
                        .group-skills__form-add__skill
                            input.input.title__skill(type="text", name="title-skill", placeholder="Новый навык") 
                            input.input.percent__skill(type="text", name="title-skill", placeholder="100%")
                            button.add__skill__btn 
</template>
                            