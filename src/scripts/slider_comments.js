import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el: "#commentsId-component",
    template: "#commentsId",
    components: {
        Flickity
    },

    data() {
        return {
            comments: [],
            flickityOptions: {
                initialIndex: 1,
                groupCells: true,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true
            }
        }
    },

    async created() {
        try {
            const resp = await axios.get('/reviews/94');
            this.comments = resp.data;  
            return resp;          
        } catch (error) {
          alert('произшла ошибка при получении отзывов')  
        };
    },

    methods: {
        arrWithRequiredImages(array) {
            return array.map(item => {
                const requiredPic = require(`../images/content/${item["author-pic"]}`);
                item["author-pic"] = requiredPic;

                return item;
            })
        }, 
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        },

    },
});
