import Vue from "vue";
import "./plugins/element";
import HelloComponent from "./components/Hello.vue";


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