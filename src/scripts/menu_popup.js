import Vue from 'vue';

var bodyClass =  document.querySelector('.body');




new Vue({
    el: "#hamburger",

    data: {
        show: false,        
    },

   methods: {
        popupActive() {
        this.show = !this.show
        }

    },

    watch: {
       show(value) {
            if (value) {
                bodyClass.classList.add('body__active');     
            } else {
                bodyClass.classList.remove('body__active');
            }        
       }
        
    }

});