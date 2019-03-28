import Vue from 'vue';
import Flickity from 'vue-flickity';   

document.addEventListener("DOMContentLoaded", function() {
    
    console.log('!!!');

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
                    groupCells: 2,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                }
            }
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
            }
        },

        created() {
            const comments = require('../data/comments.json');
            this.comments = this.arrWithRequiredImages(comments);
        }
    });
});