<template lang="pug">
ul.group-skills__form-content__list
    li.group-skills__form-content__elem(v-for = 'skill in skills')
        skill(
            :skill = 'skill'
            @removeSkill = 'removeSkill' 
        ) 
</template>

<script>

import skill from './about-me-skill';

export default {
    props: {
        skills: Array
    },
    components: {
        skill
    },
    
    methods: {
        removeSkill(skillId) {
            this.$emit('removeSkill', skillId);
        }
    }
}
</script>


