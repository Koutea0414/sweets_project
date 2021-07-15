import Vue from 'vue';
import VueRouter from 'vue-router';

import FilterType from './components/FilterType.vue';
import PhoneBody from './components/PhoneBody.vue';
import PostBody from './components/PostBody.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: FilterType },
    { path: '/PhoneBody', component: PhoneBody },
    { path: '/PostBody', component: PostBody },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
