<template>
  <div>{{ logout }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TOKEN_STORAGE } from '../constants';
import { router } from './App.vue';

@Component
export default class Login extends Vue {

  get logout() {
    this.$store.state.isLogin = false;
    this.$store.state.token = "";
    this.$store.state.email = "No Login";
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(TOKEN_STORAGE, "");
    }
    router.push("/login");
    return "";
  }
}
</script>
