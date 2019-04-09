<template lang="pug">
    .container.navigation__continer 
            ul.navigation__list
                li.navigation__elem
                    router-link(href="#", to="/",  title="Нажмите, чтобы прейти").navigation__about-me Обо мне
                li.navigation__elem     
                    router-link(href="#", to="/my_works", title="Нажмите, чтобы прейти").navigation__my-works Работы 
                li.navigation__elem   
                    router-link(href="#", to="/reviews", title="Нажмите, чтобы прейти").navigation__reviews Отзывы 
</template>
