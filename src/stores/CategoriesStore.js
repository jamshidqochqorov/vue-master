import { defineStore } from 'pinia'
import sourceData from "@/data.json";

export const useCategoriesStore = defineStore('CategoriesStore', {
   state: ()=>{
       return {
           categories: sourceData.categories
       };
   },
    getters:{},
    actions:{
        createPost(context,post) {
            post.id= 'ggg'+Math.random();
            context.commit('setPost',{post})
            context.commit('appendPostToThread',{postId: post.id,threadId:post.threadId})
        }
    },
    mutations:{
        setPost(state,{ post }){
            state.posts.push(post)
        },
        appendPostToThread(state,{postId,threadId}){
            const thread =  state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId)
        }
    },
})