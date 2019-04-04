console.log('1234');

import Vue from 'vue';

const tags = {
    template: "#slider-tags",
    props: {
        tagsArray: Array
    }
}

const btns = {
    template: "#slider-btns"
}

const thumbs = {
    template: "#slider-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
}

const display = {
    template: "#slider-display",
    components: {
        btns,
        thumbs
    },
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number 
    },
}

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    },
    computed: {
        tagsArray() {
           return this.currentWork.skills.split(','); 
        }
    }
}

new Vue({
    template: "#slider-container",
    el: "#slider-component",
    components: {
        display,
        info
    },

    data() {
        return {
            works: [],
            currentIndex: 2
        };
    },

    computed: {
        currentWork() {
            return this.works[this.currentIndex]; 
        }
    },

    watch: {
        currentIndex(value) {
           this.makeInfiniteLoopForCurIndex(value);
        }
    },

    methods: {

        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;

                return item
            });
        },

        makeInfiniteLoopForCurIndex(value) {
            
            const workAmount = this.works.length - 1;            
            if(value > workAmount) this.currentIndex = 0; 
            if(value < 0) this.currentIndex = workAmount;

        },

        handelSlide(direction) {
            switch (direction) {                
                case "next": this.currentIndex++;
                break;
                case "prev": this.currentIndex--;
                break;
            }
        }
    },

    created() {
        const data = require("../data/my_works.json");
        this.works = this.makeArrWithRequiredImages(data);    
    }

});

    