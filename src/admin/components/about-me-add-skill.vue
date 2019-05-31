<template lang="pug">
.group-skills__form-add__skill
    input.input.title__skill(
        type="text", 
        name="title-skill", 
        placeholder="Новый навык", 
        v-model='skillobj.skilltitle'
        ) 
    input.input.percent__skill(
        type="text", 
        name="title-skill", 
        placeholder="100%", 
        v-model='skillobj.skillpercent',
        )
    button.add__skill__btn(
        type='button',
        @click.prevent='addingSkill'
        )  
</template>

<script>
let uniqId = 0;
export default {
    data() {
        return {
            skillobj: {
                id: 0,
                skilltitle: '',
                skillpercent: '',
                edit: false,
                del: false
            }
            
        }
    },

    methods: {
        addingSkill() {
            uniqId++;
            this.skillobj.id = uniqId;
            this.$emit('addingSkill', {...this.skillobj});
            this.skillobj.skilltitle = '';
            this.skillobj.skillpercent = '';
        }
    }
}
</script>
