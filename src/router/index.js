import { createRouter, createWebHistory } from 'vue-router'

import sourceData from "@/data.json";
import Home from '@/pages/Home';
import ThreadShow from '@/pages/ThreadShow';
import NotFound from '@/pages/NotFound';
import Forum from '@/pages/Forum';
import Category from '@/pages/Category';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component:Home
        },
        {
            path: '/category/:id',
            name: 'Category',
            component:Category,
            props:true
        },
        {
            path: '/forum/:id',
            name: 'Forum',
            component:Forum,
            props:true
        },

        {
            path:'/thread/:id',
            name:'ThreadShow',
            component:ThreadShow,
            props:true,
            beforeEnter(to,from,next)
            {
             const threadExists = sourceData.threads.find(thread =>thread.id === to.params.id)
                if(threadExists){
                    next();
                }
                else {
                    next({
                        name:'NotFound',
                        params:{pathMatch:to.path.substring(1).split('/')},
                        query:to.query,
                        hash:to.hash
                    })
                }
            }

        },
        {   path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },



    ]
})

export default router