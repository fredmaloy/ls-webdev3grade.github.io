import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';


const skill = {
    template: "#skill",
    props: {
        skill: Object
    },
    methods: {
        drawColoredCircle() {   
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")   
            );
            const percent = (dashArray / 100) * (100 - this.skill.percent);
            circle.style.strokeDashoffset = percent;
        }
    }, 

    mounted() {        
        this.drawColoredCircle();        
    }
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },

    props: {
        category: Object,
        skills: Array
    },

    
    
};

new Vue({
    el: "#skills-component",
    template: "#skillsId",
    components: {
        skillsRow
    },

    data() {
        return {
            categories: {},
            skills: []
        }
    },

    
    async created() {
        try {
            const response = await axios.get("/categories/94");
            this.categories = response.data;
            
        } catch (error) {
          alert('произшла ошибка приполучении категорий скилов')  
        };

        try {
            const resp = await axios.get("/skills/94");
            this.skills = resp.data;
        } catch (error) {
            alert('произшла ошибка приполучении скилов')
        };
    },

    methods: {
        filterSkillsById(categoryId) {
            return this.skills.filter(skill => skill.category === categoryId)
        }
    }
});