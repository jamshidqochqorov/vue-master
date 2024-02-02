<template>
 <h1>Welcome to the Forum</h1>
  <CategoryList :categories="categories"/>
</template>

<script >
import soureData from '@/data.json';
import CategoryList from "@/components/CategoryList";
export default {
  name:'HomePage',
  components:{
    CategoryList,
  },
  data(){
    return{
      categories: soureData.categories,
    }
  }
}
</script>