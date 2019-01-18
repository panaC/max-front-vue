import Vue from "vue";
import VueRouter from 'vue-router'
import "./plugins/element";
import App from "./components/App.vue";
import Vuex from 'vuex'
import { store } from './store/store';

Vue.use(Vuex);
Vue.use(VueRouter);

let v = new Vue({
    el: "#app",
    template: `<app/>`,
    store: store,
    components: {
      App,
    }
});