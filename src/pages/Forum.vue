<template>
  <div  class="col-full push-top">
    <div class="forum-header">
       <div class="forum-details">
         <h1>{{forum.name}}</h1>
         <p class="text-lead">{{forum.description}}</p>
       </div>
      <a class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
      <PageThreadList :threads="threads"/>
  </div>
</template>

<script>
import PageThreadList from "@/components/PageThreadList";

export default {
  name:'Forum-Vue',
  components: {PageThreadList},
  props:{
    id:{
      required:true,
      type:String
    }
  },
  computed:{
       forum(){
         return this.$store.state.forums.find(forum=>forum.id === this.id)
       },
    threads(){
         return this.$store.state.threads.filter(thread=>thread.forumId===this.id)
    }
  }
}
</script>

<style scoped>

</style>