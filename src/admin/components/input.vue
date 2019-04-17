<template lang="pug">
label.login__block(
    v-if="fieldType === 'input'" 
    
  )    
    .login__input-title(v-if='title') {{title}}
    input(
      v-bind="$attrs",
      :value="value", 
      @input="$emit('input', $event.target.value)",
      :class="[iconClass]"
    ).login__input
    
</template>

<script>
export default {
    inheritAttrs: false,
  props: {
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    noSidePaddings: Boolean,
    fieldType: {
      type: String,
      default: "input"
    },
    value: String | Number,
    icon: {
      type: String,
      default: "",
      validator: value => ["", "user", "key"].includes(value)
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? `icon__${iconName}` : "";
    }
  },
}
</script>


<style lang="postcss" scoped>

.login__block {
    width: 80%;  
}

 

.login__input {
    border: none;
    background-color: transparent;
    resize: none;
    outline:none;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    border-bottom: 1px solid #9299a1;
    height: 50px;
    width: 100%; 
    padding-left: 50px;    
    background-size: 40px 40px;   
    background-repeat: no-repeat;
   
     &.icon {
         @each $icon in user, key {            
            &__$(icon) {
                background-image: svg-load("$(icon).svg", fill=#9299a1, width=100%, height=100%);
            }
            
        }
     }
        
       
}

.login__input-title {
    padding-bottom: 20px;
    padding-left: 50px;
    color: #9299a1;
}


</style>
