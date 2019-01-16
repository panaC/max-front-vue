<template>
    <div>
        <selectJourney v-on:searchJourney="onDisplay"/>
        <displayJourney v-bind:value='value'/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SelectJourney from "./select-journey.vue";
import DisplayJourney, { Ivalue } from "./display-journey.vue";

@Component({
    components: {
        SelectJourney,
        DisplayJourney,
    },
})
export default class Booking extends Vue {
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
