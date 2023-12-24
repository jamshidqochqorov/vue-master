<template>
 <h1>Welcome to the Forum</h1>
  <PageThreadList :threads="threads"/>
</template>

<script >

import PageThreadList from "@/components/PageThreadList";
import soureData from '@/data.json';
export default {
  components:{
    PageThreadList
  },
  data(){
    return{
      threads: soureData.threads,
    }
  }
}
</script>