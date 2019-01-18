import Vuex from 'vuex';
import Vue from "vue";
import userService from '../services/user.service';

// set here to declare new class
Vue.use(Vuex);

interface Istore {
  user: userService;
}

export const store = new Vuex.Store<Istore>({
  state: {
    user: new userService(),
  }
})
