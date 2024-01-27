<template>
  <span title="salom">
    {{diffForHumans(timestamp )}}
  </span>
</template>

<script>
import dayjs from "dayjs";

export default {
  props:{
    timestamp:{
      required:true,
      type:Number
    }
  },
  methods:{
    diffForHumans(timestamp){
      return dayjs.unix(timestamp).fromNow()
    }
  }
}
</script>