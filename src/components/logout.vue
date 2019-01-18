<template>
  <div>{{ logout }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TOKEN_STORAGE } from '../constants';

@Component
export default class Login extends Vue {

  get logout() {
    return this.$store.state.user.logout();
  }
}
</script>
