<template>
  <div  class="col-large push-top">

    <h1>{{thread.title}}</h1>

    <PostList :posts="threadPosts"/>
    <PostEditor @save="addPost"/>
  </div>


</template>

<script >
import {mapState,mapActions} from "pinia";
import {usePostsStore} from "@/stores/PostsStore";
import {useThreadsStore} from "@/stores/ThreadsStore";
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";
export default {
  props:{
    id:{
      required:true,
      type:String,
    }
  },
  components:{
    PostList,
    PostEditor


  },
  computed:{
    ...mapState(useThreadsStore,['threads']),
    ...mapState(usePostsStore,['posts']),
    thread(){
      return this.threads.find(thread=>thread.id === this.id)
    },
    threadPosts(){
      return this.posts.filter(post=>post.threadId === this.id)
    }
  },
  methods:{
    ...mapActions(usePostsStore,['createPost']),
    addPost(eventdata){
      const post = {
        ...eventdata.post,
        threadId:this.id,
        userId:'rpbB8C6ifrYmNDufMERWfQUoa202'
      }
      this.createPost(post)
      // console.log(post)
      // this.posts.push(post)
      // this.thread.posts.push(post.id)

    }
  }

}
</script>