import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Flash from './views/Flash.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/flash', component: Flash, name:"flash"},
    { path: '/:keyboardP(.+)/:layoutP(.+)', component: Home },
    { path: '/', component: Home }
  ]
});
