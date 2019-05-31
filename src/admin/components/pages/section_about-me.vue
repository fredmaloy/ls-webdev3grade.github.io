<template lang="pug">
section.content__section      
    .content__headline
        h1.headline__second-grade Блок &laquoОбо мне&raquo
        a(
            href='#', 
            title="Нажмите, чтобы добавить группу", 
            @click.prevent='addingGroup=true',
            v-if='addingGroup===false'
            )
            .section__about-me__add-group
                .add-group__icon                           
                .add-group__content Добавить группу 
    .content__work-space 
        ul.content__work-space__about-me__list
            li.content__work-space__about-me__elem(v-if='addingGroup')
                .group-skills
                    form.group-skills__form(action="#")
                        headlineAddingGroup(
                            @cancel="addingGroup=false"
                        ) 
                        ul.group-skills__list                     
                        addskill(
                            @addingSkill='addingSkill',
                        )               
            li.content__work-space__about-me__elem(
                v-for='category in categories'
                :key = 'category.id'
                )
                addGroup(
                    :category = "category",
                    :skillsAdd = "filterSkillsByctegoryId(category.id)"
                )
                               
</template>

<script>

import headlineAddingGroup from '../about-me-headline';
import addskill from '../about-me-add-skill';
import addGroup from '../about-me-add-group';
import {mapActions, mapState} from "vuex";


export default {
    data() {
        return {
            addingGroup: false,
        }
    },
    components: {
         headlineAddingGroup, addskill, addGroup
    },

    computed: {
      ...mapState('categories', {
          categories: state => state.categories
      }),   
      ...mapState('skillsAdd', {
          skillsAdd: state => state.skillsAdd
      })   
    },

    methods: {
        addingSkill(skillobj) {
            this.skills.push(skillobj);
        },

        removeSkill(skillId) {
           this.skills = this.skills.filter(item => item.id != skillId);
        },

        ...mapActions('categories', ['fetchCategories']),
        ...mapActions('skillsAdd', ['fetchSkills']),
       
       filterSkillsByctegoryId(categoryId) {
            return this.skillsAdd.filter(skill => skill.category === categoryId);
        },

    },

    async created() {
        try {
           await this.fetchCategories();
        } catch (error) {
            alert('Произошла ошибка при добавлении категории');
        };

        try {
            await this.fetchSkills();
        } catch (error) {
            alert('Произошла ошибка при добавлении элемента Skills');
        };
    }
}
</script>

                            