<template>
  <div  class="col-large push-top">

    <h1>{{thread.title}}</h1>

    <PostList :posts="threadPosts"/>
    <PostEditor @save="addPost"/>
  </div>


</template>

<script >
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
    posts()
    {
      return this.$store.state.posts
    },
    threads()
    {
      return this.$store.state.threads
    },
    thread(){
      return this.threads.find(thread=>thread.id === this.id)
    },
    threadPosts(){
      return this.posts.filter(post=>post.threadId === this.id)
    }
  },
  methods:{
    addPost(eventdata){
      const post = {
        ...eventdata.post,
        threadId:this.id,
        userId:'rpbB8C6ifrYmNDufMERWfQUoa202'
      }
      this.$store.dispatch('createPost',post)
      // console.log(post)
      // this.posts.push(post)
      // this.thread.posts.push(post.id)

    }
  }

}
</script>