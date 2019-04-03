/* import Vue from 'vue'; */

/* const linksValue = document.getElementById('#navigation');
const dataSection = document.querySelectorAll('.section');

for(var linkValue in linksValue) {
    linkHref = getAttribute('href');
    linkСontent = document.linkValue.innerHTML;
}


linkValue.addEventListener('click', (e) => {
     e.preventDefault();
     
     if (linkHref === dataSection.dataset.Link) {
        window.scroll(dataSection.dataset.Link);
     };
}); */

new Vue({
    
    el: "#navigation",

    

    data() {

        
        const href = dataset.hrefNavigation;

        for(var link in links) {
            link = href
        };

    },

   methods: {

    }

});







/* document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById('#navigation');
    const scroll = document.querySelector('.hero__scroll');
   
    var links = [{"title": "Главная" , "section": "#section__hero"},
                {"title": "Обо мне" , "section": "#section__my-card"},
                {"title": "Навыки" , "section": "#section__skills"},
                {"title": "Работы" , "section": "#section__my-works"},
                {"title": "Отзывы" , "section": "#section__comments"},
                {"title": "Связаться" , "section": "#section__feedback"}];
                ['Главная', 'Обо мне', 'Навыки', 'Работы', 'Отзывы', 'Связаться']
        for (var link in links) {
            return link;
        };

    navigation.addEventListener('click', (e) => {
        
        e.preventDefault();

        navigation.value.href = link;
        
    });


}); */

/* #section__hero
#section__my-card
#section__skills
#section__my-works
#section__comments
#section__feedback
#footer */