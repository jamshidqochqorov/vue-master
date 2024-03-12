import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import { createPinia } from 'pinia'
import AppDate from "@/components/AppDate";
const pinia = createPinia()
const forumApp = createApp(App)


forumApp.use(router)
forumApp.use(store)
forumApp.use(pinia)

forumApp.component('AppDate',AppDate)
forumApp.mount('#app')
