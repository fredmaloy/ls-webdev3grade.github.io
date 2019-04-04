import Vue from 'vue';

new Vue({
    el: "#hamburger",

    data: {
        
        show: false
      
    },

   methods: {
        popupActive() {
        this.show = !this.show
        }
    }

});