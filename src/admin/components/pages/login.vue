<template lang="pug">
section.login
    form.login__form(@submit.prevent='login') 
        .login__title 
            h2.login__title-headline Авторизация
        .login__row
            appInput(
                title='Логин',
                icon='user',
                v-model='user.name'
            )
        .login__row
            appInput(
                type='password',
                icon='key',
                title='Пароль',               
                v-model='user.password'
            )
        .login__send
        button(type="submit").login__send-btn Отправить    
        a.login__close(href="https://fredmaloy.github.io/ls-webdev3grade.github.io")
</template>

<script>

import $axios from "@/requests.js";

export default {

    components: {
        appInput: () => import("components/input.vue")
    },

    data() {
        return {
            icon: "",
            user: {
                name: "string",
                password: "string"
            }            
        }
    },

    methods: {
        async login() {
            try {
                const {data: {token}} = await $axios.post('/login', this.user);
            
                localStorage.setItem("token", token);
                $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
                this.$router.replace("/");

            } catch (error) {
                
            }

        },

        close() {

        }
    }
}
</script>


<style lang="postcss" scoped>

.login {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #644920 url('../../../images/content/bg_admin.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    min-height: 100vh;
    color: #ffffff;
}

.login__form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 520px;
    background-color: #1b1f22;
    padding: 20px;
    box-shadow: 3px 3px 5px #0f1112;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.login__send-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    color: #ffffff;
    font-size: 18px;
    text-transform: uppercase;
    outline: none;
    height: 50px;
    width: 185px;
    background-color: #ee8400;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 20px;

    &:hover {
        background: #ff8a00;
        background: -moz-linear-gradient(left, #ff8a00 1%, #ff9900 47%, #ff8a00 100%, #ff9d00 100%, #ff8a00 100%);
        background: -webkit-linear-gradient(left, #ff8a00 1%,#ff9900 47%,#ff8a00 100%,#ff9d00 100%,#ff8a00 100%); 
        background: linear-gradient(to right, #ff8a00 1%,#ff9900 47%,#ff8a00 100%,#ff9d00 100%,#ff8a00 100%); 
    }
}

.login__close {
    width: 20px;
    height: 20px;
    content: '';
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    background: svg-load('cross.svg', fill=#9299a1, width=100%, height=100%) top left no-repeat;
    background-size: 20px 20px;
    

    &:hover {
        background: svg-load('cross.svg', fill=#cd1515, width=100%, height=100%) top left no-repeat;
        background-size: 20px 20px;
    }
}

.login__title {
    padding-top: 10px;
    color: #9299a1;
}

</style>

