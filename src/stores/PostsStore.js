import { defineStore } from 'pinia'
import sourceData from "@/data.json";
import {useThreadsStore} from "@/stores/ThreadsStore";

export const usePostsStore = defineStore('PostsStore', {
    state: ()=>{
        return {
            posts: sourceData.posts,
        };
    },
    actions:{
        createPost(post) {
            post.id= 'ggg'+Math.random();
            this.posts.push(post)
            const thread = useThreadsStore().threads.find(thread => thread.id === post.threadId)
            thread.posts.push(post.id)
        }
    },

})