import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HelloComponent from "./components/Hello.vue";

Vue.use(ElementUI);

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <el-button>{{ name }}</el-button>
        Name: <input v-model="name" type="text"/>
        <hello-component :name="name" :initialEnthusiasm="5"/>
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});