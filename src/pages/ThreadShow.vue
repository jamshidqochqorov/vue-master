<template>
  <div  class="col-large push-top">

    <h1>{{thread.title}}</h1>

    <PostList :posts="threadPosts"/>
    <div class="col-full">
      <form @submit.prevent="addPost">
       <div class="form-group">
         <textarea v-model="newPostText" cols="30" rows="10" class="form-input"></textarea>
       </div>
        <div class="form-actions">
         <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>


</template>

<script >
import soureData from '@/data.json';
import PostList from "@/components/PostList";
export default {
  props:{
    id:{
      required:true,
      type:String,
    }
  },
  components:{
    PostList

  },
  data(){
    return{
      threads:soureData.threads,
      posts:soureData.posts,
      newPostText:''
    }
  },
  computed:{
    thread(){
      return this.threads.find(thread=>thread.id === this.id)
    },
    threadPosts(){
      return this.posts.filter(post=>post.threadId === this.id)
    }
  },
  methods:{
    addPost(){
      console.log('running')
      const postId = 'ggg'+Math.random();
      const post = {
        id:postId,
        text:this.newPostText,
        publishedAt:Math.floor(Date.now()/1000),
        threadId:this.id,
        userId:'rpbB8C6ifrYmNDufMERWfQUoa202'
      }
      this.posts.push(post)
      this.thread.posts.push(postId)
      this.newPostText = ''
    }
  }

}
</script>