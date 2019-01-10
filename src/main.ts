import Vue from "vue";
import "./plugins/element";
import App from "./components/App.vue";

let v = new Vue({
    el: "#app",
    template: `<app/>`,
    components: {
      App,
    }
});