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

    data() {
        return {
            move: 0,
            thumbWidth: 0,
            thumbsWidth: 0
        }
    },

    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
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
            currentIndex: 0
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
                case "next":
                    const lastSlide = this.works[this.works.length - 1];
                    this.works.unshift(lastSlide);
                    this.works.pop();
                  break;
                case "prev":
                this.works.push(this.works[0]);
                this.works.shift();
                  break;
              }
        }
    },

    created() {
        const data = require("../data/my_works.json");
        this.works = this.makeArrWithRequiredImages(data);    
    }

});

    