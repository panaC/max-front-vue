<template>
  <div>
    <navbar />
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from "./navbar.vue";
import VueRouter from 'vue-router';

import Login from './login.vue';
import Booking from './booking.vue';
import Register from './register.vue';
import Account from './account.vue';

import { store } from '../store/store';

export const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/booking', component: Booking },
    { path: '/account', component: Account },
    { path: '*', component: Booking },
  ]
})

router.beforeResolve((to, from, next) => {
  if (store.state.isLogin || to.path == "/login" || to.path == "/register") {
    return next();
  }
  next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
});

@Component({
  components: {
    Navbar,
  },
  router: router,
})
export default class App extends Vue {
  
}
</script>

<style scoped>
@media (min-width: 1000px) {
  .content {
    width: 80%;
    padding-top: 40px;
    margin: auto;
  }
}

@font-face {
  font-family: 'Roboto';
  src:  url('../assets/fonts/Roboto-Regular.ttf') format('ttf');
  font-weight: 600;
  font-style: normal;
}

* { 
    font-family: Roboto, sans-serif; 
} 
</style>
