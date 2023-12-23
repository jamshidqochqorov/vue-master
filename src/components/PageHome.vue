<template>
  <div v-for="thread in threads"
        :key="thread.id"
        class="col-large push-top">

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
   This is a Home Page.
    <div :key="thread" v-for="thread in threads">
        <h1> {{thread.title}}</h1>

        <div :key="postId" v-for="postId in thread.posts">
          <p>{{userById(postById(postId).userId).name}}</p>
          <p>{{postById(postId).text}}</p>
        </div>
    </div>

</template>

<script setup>
import {reactive} from "vue";
import soureData from '@/data.json';
const threads= reactive(soureData.threads)
const posts= reactive(soureData.posts)
const users= reactive(soureData.users)

function postById(postId){
  return posts.find(p=>p.id===postId)
}
function  userById(userId){
  return users.find(p=>p.id ===userId);
}

</script>