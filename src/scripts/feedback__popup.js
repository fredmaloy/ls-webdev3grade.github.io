import vue from 'vue';

new vue ({
    template: "#feedback-popup-container",
    el: "#feedback__popup-component",
   
    methods: {
        feedbackPopupClose() {
            var feedbackFormWindow = document.querySelector('.feedback-popup__container');
            var bodyClass =  document.querySelector('.body');   
            feedbackFormWindow.classList.remove('feedback-popup__active');
            bodyClass.classList.remove('body__active');
        }
    }
});