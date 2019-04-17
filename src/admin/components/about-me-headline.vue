<template lang="pug">
.group-skills__form-headline
    input.input.title-group__input(
        type="text", 
        name="title-group", 
        placeholder="Введите название новой группы",
        v-model='skillTitle'
        )
    .group__btn
        button.group__btn-ok(@click.prevent = 'addSkillsGroup')
        button.group__btn_cancel
</template>

<script>
import { mapActions } from 'vuex';
export default {

    data() {
        return {
            skillTitle: ''
        };        
    },

    methods: {
        ...mapActions('categories', ['addNewSkillGroup']),
        async addSkillsGroup() {
           try {
                await this.addNewSkillGroup(this.skillTitle);
                this.skillTitle = '';
           } catch (error) {
                alert(error.message);
           }
        }
    }
}
</script>

