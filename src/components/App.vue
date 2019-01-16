<template>
  <div>
    <navbar />
    <div class='content'>
      <selectJourney
        v-on:searchJourney="onDisplay"/>
      <displayJourney v-bind:value='value'/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SelectJourney from "./select-journey.vue";
import DisplayJourney, { Ivalue } from "./display-journey.vue";
import Navbar from "./navbar.vue";

@Component({
  components: {
    Navbar,
    SelectJourney,
    DisplayJourney,
  }
})
export default class App extends Vue {
  protected value: Ivalue = {
        display: false,
        date: new Date(),
        dest: '',
        orig: '' 
      }
    
  
  onDisplay(value: Ivalue) {
    this.value = value;
  }
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
</style>
