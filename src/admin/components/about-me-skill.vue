<template lang="pug">
.form-content__skill
    .form-content__title-skill {{skill.skilltitle}} 
    .form-content__percent-skill {{skill.skillpercent}}%
    .form-content__editing-btn 
        button.edit
        button.delete(@click.prevent = 'removeSkill')
</template>

<script>
export default {
    props: {
        skill: Object
    },

    methods: {
        removeSkill() {
            this.$emit('removeSkill', this.skill.id);
        }
    } 
}
</script>
