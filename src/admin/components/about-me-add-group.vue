<template lang="pug">
.group-skills
    form.group-skills__form(action="#")
        groupName(
            :category='category'
        )
        ul.group-skills__list
            skillsAddlist(
                v-for="skill in skillsAdd",
                :key="skill.id",
                :skill="skill"
            )                         
        .group-skills__form-add__skill
            input.input.title__skill(
                type="text", 
                v-model='skill.title', 
                placeholder='название навыка',
                @keydown.enter ='addNewSkill'
                ) 
            input.input.percent__skill(
                type="text", 
                v-model='skill.percent', 
                placeholder='100%',
                @keydown.enter ='addNewSkill'
                )
            button.add__skill__btn(
                type='button',
                @click.prevent='addNewSkill'
                ) 
</template>

<script>
import skillsAddlist from './about-me-add-list';
import groupName from './about-me-group-name';
import {mapActions} from "vuex";

export default {
    components: {
        skillsAddlist, groupName
    },
    props: {
        category: Object,
        skillsAdd: Array,
    },
    data() {
        return {
            skill: {
                category: this.category.id,
                title: "",
                percent: ""
            }
        }
    },
    methods: {
        ...mapActions('skillsAdd', ['addSkills']),
        ...mapActions('categories', ['fetchCategories', 'removeSkillGroup']),
        async addNewSkill() {
            try {
                await this.addSkills(this.skill);
                      this.skill.title = '';
                      this.skill.percent = '';
            } catch (error) {
                alert('произошла ошибка при добавлении скила')
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

