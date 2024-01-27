<template>
  <div class="col-full">
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea v-model="text" cols="30" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>


export default {

  data(){
    return{
      text:''
    }
  },
  methods:{
    addPost(){
      console.log('running')
      const postId = 'ggg'+Math.random();
      const post = {
        id:postId,
        text:this.text,
        publishedAt:Math.floor(Date.now()/1000),
        threadId:this.id,
        userId:'rpbB8C6ifrYmNDufMERWfQUoa202'
      }
      this.$emit('save',{post})
      this.text = ''
    }
  }

}
</script>