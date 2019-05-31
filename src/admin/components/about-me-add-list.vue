<template lang="pug">
    li.form-content__skill(v-if='editmode === false')
        .form-content__title-skill {{skill.title}} 
        .form-content__percent-skill {{skill.percent}}%
        .form-content__editing-btn 
            button.edit(
                type='button',
                @click='editmode=true'
                )
            button.delete(
                type='button',
                @click.prevent='removeExistedSkill'
                )
             
    li.group-skills__form-content__elem(v-else)
        input.input.form-content__title-skill__edit(
            type="text", 
            name="edit-skill", 
            placeholder="",
            v-model='editedSkill.title'
            ) 
        input.input.form-content__percent-skill__edit(
            type="text", 
            name="edit-percent", 
            placeholder="",
            v-model='editedSkill.percent'
            ) 
        .group__btn
            button.group__btn-ok(
                type='button',
                @click.prevent ='save'
                )
            button.group__btn_cancel(
                type='button',
                @click.prevent ='editmode=false'
                )
</template>

<script>

import { mapActions } from 'vuex';

export default {
    props: {
        skill: Object
    },

    data() {
        return {
            editmode: false,
            editedSkill: {...this.skill},
        }

    },

    methods: {
        ...mapActions('skillsAdd', ['removeSkills', 'editedSkills']),
        async removeExistedSkill() {
            try {
                await this.removeSkills(this.skill.id);
                
            } catch (error) {
                
            }
        },

        async save  () {
            try {
               await this.editedSkills(this.editedSkill);
               this.editmode = false;
            } catch (error) {
                
            }
        }
    }
}
</script>