import Vue from "vue";
import VueRouter from 'vue-router'
import "./plugins/element";
import App from "./components/App.vue";

Vue.use(VueRouter);

let v = new Vue({
    el: "#app",
    template: `<app/>`,
    components: {
      App,
    }
});