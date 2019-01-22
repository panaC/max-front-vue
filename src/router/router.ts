import VueRouter from 'vue-router';
import Login from '../components/login.vue';
import Booking from '../components/booking.vue';
import Register from '../components/register.vue';
import Account from '../components/account.vue';
import Logout from '../components/logout.vue';
import Tickets from '../components/tickets.vue';

import { store } from '../store/store';

export const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/tickets', component: Tickets },
    { path: '/booking', component: Booking },
    { path: '/account', component: Account },
    { path: '/logout', component: Logout },
    { path: '*', component: Booking },
  ]
})

router.beforeResolve((to, from, next) => {
  console.log(store.state.user.isLogin);
  
  if (store.state.user.isLogin || to.path == "/login" || to.path == "/register") {
    return next();
  }
  next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
});