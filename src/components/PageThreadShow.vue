<template>
  <div class="col-large push-top">

    <h1>{{thread.title}}</h1>
    <div class="post-list">
      <div class="post"
           :key="postId"
           v-for="postId in thread.posts">
        <div class="user-info">
          <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>
          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar">
          </a>
          <p class="desktop-only text-small">107</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{postById(postId).text}}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>

      </div>
    </div>

  </div>

</template>

<script >
import soureData from '@/data.json';
export default {
  props:{
    id:{
      required:true,
      type:String,
    }
  },
  data(){
    return{
      threads:soureData.threads,
      posts:soureData.posts,
      users:soureData.users,
    }
  },
  computed:{
    thread(){
      return this.threads.find(thread=>thread.id === this.id)
    }
  },
  methods:{
    postById(postId){
      return this.posts.find(p=>p.id===postId)
    },
      userById(userId){
      return this.users.find(p=>p.id ===userId);
}
  }
}
</script>