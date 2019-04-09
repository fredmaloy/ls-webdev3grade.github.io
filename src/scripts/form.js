import vue from 'vue';
import { reset } from 'ansi-colors';

new vue ({
    template: "#form-container",
    el: "#form-component",

    data() {
        return {
            errors: [],
            name: '',
            to: '',
            comment: ''
        }
    },

    computed: {
        
        isFormValid(e) {

            e.prevent;
            
            if (this.name && this.to && this.comment) {
                return true;
              }
        
              this.errors = [];
        
              if (!this.name) {
                this.errors.push('Требуется указать имя');
              }

              if (!this.to) {
                this.errors.push('Требуется указать email');
              }

              if (!this.comment) {
                this.errors.push('Оставьте сообщение');
              }   
        },

        isNameValid: function(e) {
            e.prevent;
            if (this.name) {
                return true
            }
        },

        isEmailValid: function(e) {
            e.prevent;
            if (this.to) {
                return true
            }
        },

        isMessageValid: function(e) {
            e.prevent;
            if (this.comment) {
                return true
            }
        },
    },

    methods: {        

        feedbackSend(e) {

            e.prevent;

            if (this.isFormValid) {            

                var formSend = new FormData();
                formSend.append('phone','8(982)777-77-77');
                formSend.append('name', this.name);
                formSend.append('to', this.to);
                formSend.append('comment', this.comment);
                
                const xhr = new XMLHttpRequest();
                
                xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');        /* https://webdev-api.loftschool.com/sendmail/fail */
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send(formSend);

                xhr.responseType = 'json';



                xhr.addEventListener('load', () => {
                    
                    if (xhr.response.status) {
                        console.log('все ок на сервере'); 
                        form.reset();                      
                    }else{
                        console.log('Произошла ошибка');
                    };

                    console.log(xhr.response.status);

                });
                
                console.log("все ок");
            }
        }
    },


});


                