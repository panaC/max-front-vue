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

import { router } from '../router/router';

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
