import { defineStore } from 'pinia'
import sourceData from "@/data.json";

export const usePostsStore = defineStore('PostsStore', {
    state: ()=>{
        return {
            posts: sourceData.posts
        };
    },
    getters:{},
    actions:{},
})