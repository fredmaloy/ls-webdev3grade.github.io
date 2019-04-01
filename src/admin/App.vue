<template lang="pug">
section.section.section__about-me
    header.header
        .container.header__continer
            .header__left-part
                .header__my-badge
                  .header__my-badge__photo
                    img(src="../images/content/my_photo.png", alt="").user-pic__admin
                  h2.header__my-badge__name Черепанов Сергей
                h3.headline__third-grade.header__headline Панель администрирования
            .header__right-part
                a(href='#', title="Нажмите, чтобы выйти").header__exit Выход
    nav.navigation
        .container.navigation__continer 
            ul.navigation__list
                li.navigation__elem
                    a(href="#", title="Нажмите, чтобы прейти").navigation__about-me Обо мне
                li.navigation__elem     
                    a(href="#", title="Нажмите, чтобы прейти").navigation__my-works Работы 
                li.navigation__elem   
                    a(href="#", title="Нажмите, чтобы прейти").navigation__reviews Отзывы    
    .content
      .container.content__continer
        ul.content_list
          li.content__elem
            include ./pug_admin/section_about-me.pug   
          li.content__elem
            //include ./pug_admin/section_my-works.pug   
          li.content__elem
            //include ./pug_admin/section_reviews.pug               
</template>
<style lang='pcss' src="./main_admin.pcss"></style>
