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
        navigation
    .content
        .container.content__continer
            router-view                     
</template>
<script>


import navigation from './components/navigation.vue';



export default {
    name: 'app',
    components: {
        navigation
    }
}
</script>

<style lang='pcss' src="./main_admin.pcss"></style>
