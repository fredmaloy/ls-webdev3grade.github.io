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
                        headline
                        skillslist(
                            :skills = 'skills',
                            @removeSkill = 'removeSkill'
                        )                         
                        addskill(
                            @addingSkill='addingSkill'
                        )               
</template>

<script>

import headline from '../about-me-headline';
import skillslist from '../about-me-list';
import addskill from '../about-me-add-skill';


export default {
    data() {
        return {
            skills: [],
            addingGroup: false
        }
    },
    components: {
        headline, skillslist, addskill
    },

    methods: {
        addingSkill(skillobj) {
            this.skills.push(skillobj);
        },

        removeSkill(skillId) {
           this.skills = this.skills.filter(item => item.id != skillId);
        }
    }
}
</script>

                            