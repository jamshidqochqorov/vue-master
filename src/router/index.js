import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome';
import PageThreadShow from '../components/PageThreadShow';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component:PageHome
        },
        {
            path:'/thread/:id',
            name:'ThreadShow',
            component:PageThreadShow,
            props:true
        }



    ]
})

export default router