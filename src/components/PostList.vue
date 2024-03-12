<template>
  <div class="post-list">
    <div class="post"
         :key="post.id"
         v-for="post in posts">
      <div class="user-info">
        <a href="#" class="user-name">{{userById(post.userId).name}}</a>
        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar">
        </a>
        <p class="desktop-only text-small">107</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{post.text}}
          </p>
        </div>
      </div>
        <div class="post-date text-faded">
          <AppDate :timestamp="post.publishedAt"></AppDate>
        </div>

    </div>
  </div>
</template>

<script>
import dayjs from  'dayjs';
import relativeTime from   'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);
export default {
  props:{
    posts:{
      required:true,
      type:Array
    }
  },
  data(){
    return{
      time:dayjs
    }
  },
  computed:{
    users()
    {
      return this.$store.state.users
    }
  },
  methods:{
    userById(userId){
      return this.users.find(p=>p.id ===userId);
    },

  }
}
</script>