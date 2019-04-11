import vue from 'vue';

const feedbackError = {
    template: "#feedback-input__error",
    props: [
        "texterror"
    ]
}


const feedbackForm = {
    template: "#feedback-form",
    components: {
        feedbackError
    },

    data() {
        return {
            nameerror: false,
            emailerror: false,
            commenterror: false,
            name: '',
            to: '',
            comment: '',
            renderkey: 0,
            text: String,
            nameError: 0
        }
    },

    computed: {

       
        
        isFormValid(e) {            

            e.prevent; 
           
            if (this.name && this.to && this.comment) {
                return true;
              };  
            
        },

        
        

        isNameValid: function(e) {
            e.prevent;
            if (this.name) {
                return true; 
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
                var feedbackFormWindow = document.querySelector('.feedback-popup__container');
                var bodyClass =  document.querySelector('.body');
                var feedbackFormText = document.querySelector('.feedback-popup__error');

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
                        console.log('Успешно отправлено'); 
                        feedbackFormWindow.classList.add('feedback-popup__active');
                        feedbackFormText.innerHTML = 'Сообщение отправлено';
                        feedbackFormText.style.color = '#1b1f22';
                        bodyClass.classList.add('body__active'); 
                        this.name = '';
                        this.to = '';
                        this.comment = '';
                        
                    }else{
                        console.log('Произошла ошибка');
                        feedbackFormWindow.classList.add('feedback-popup__active');
                        feedbackFormText.innerHTML = 'Произошла ошибка';
                        feedbackFormText.style.color = '#cd1515';
                        this.winti = "Произошла ошибка";
                        bodyClass.classList.add('body__active'); 
                    };

                });
            
            }else if (!this.name) { 
                this.nameerror = true;                
            }else if (!this.to) {
                this.nameerror = false;
                this.emailerror = true;                
            }else if (!this.comment) {
                this.nameerror = false; 
                this.emailerror = false;
                this.commenterror = true;               
            };
         
        },               
    },
}

new vue ({
    template: "#form-container",
    el: "#form-component",
    components: {
        feedbackForm        
    }
});


                