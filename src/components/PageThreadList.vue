<template>
  <div class="col-full">
     <div class="thread-list">
       <h2 class="list-title">Threads</h2>
       <div class="thread"
        v-for="thread in threads"
        :key="thread.id">

         <div>
             <p>
               <RouterLink :to="{name:'ThreadShow',params:{id:thread.id}}">{{ thread.title }}</RouterLink>
             </p>
             <p class="text-faded text-xsmall">
               By <a href="#">{{userById(thread.userId).name}}</a>,<AppDate :timestamp="thread.publishedAt"></AppDate>
             </p>
         </div>

         <div class="activity">
           <p class="replies-count">
              {{ thread.posts.length}}
           </p>
           <img class="avatar-medium" :src="userById(thread.userId).avatar">

           <div>
               <p class="text-xsmall">
                 <a href="#">{{userById(thread.userId).name}}</a>
               </p>
           </div>
         </div>

       </div>

     </div>
  </div>

</template>

<script >

export default {
  props:{
    threads:{
      type:Array,
      required:true,
    }
  },
  computed:{
    posts(){
      return this.$store.state.posts
    },
    users(){
      return this.$store.state.users
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