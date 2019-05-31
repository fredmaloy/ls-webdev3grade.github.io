<template lang="pug">
    .group-skills__form-headline(
        v-if="editmode === false"
        @keydown.enter ='editmode=false'    
        )
        h2.form-headline {{category.category}}
        .group__btn
            button.edit(
                type='button',
                @click.prevent="editmode=true",
            )
            button.group__btn_cancel(
                type='button',
                @click.prevent='removeExistedGroup'
                )

    .group-skills__form-headline(v-else)
        input.input.title-group__input(
            type="text", 
            name="title", 
            placeholder="Введите название новой группы",
            v-model="editedName.title",
            @keydown.enter = 'saveName'
            )
        .group__btn
            button.group__btn-ok(
                type='button',
                @click.prevent="saveName"
            )
            button.group__btn_cancel(
                type='button',
                @click.prevent="editmode=false"
            )
</template>

<script>

import { mapActions } from 'vuex';

export default {

    props: {
        category: Object
    },

    data() {
        return {
            editmode: false,
            editedName: {...this.category}
        }
    },

    methods: {

        ...mapActions('categories', ['editNameGroup', 'removeSkillGroup']),

       async saveName() {
           try {
              await this.editNameGroup(this.editedName);
              this.editmode=false;
           } catch (error) {
               alert('Не удалось сохранить новое имя группы')
           }
        },

        async removeExistedGroup() {
            try {
                await this.removeSkillGroup(this.category.id);                
            } catch (error) {
                alert('Не удалось удалить группу')
            }
        },
    }


}
</script>

