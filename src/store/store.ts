import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

// @TODO : check isLogin by call fct service check token if saved in localstorage and valid

export const store = new Vuex.Store({
  state: {
    token: "",
    isLogin: false,
    email: "No Login",
  }
})
