<template>
  <div v-if="value.display">
    <el-alert v-if="errorFetch"
      title="error in fetch data"
      type="error">
    </el-alert>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <el-table :data="journeys" v-loading="loading">
          <el-table-column prop="originCode" label="originCode" />
          <el-table-column prop="originName" label="originName" />
          <el-table-column prop="destinationCode" label="destinationCode" />
          <el-table-column prop="destinationName" label="destinationName" />
          <el-table-column prop="departureDateTime" label="departureDateTime" />
          <el-table-column prop="arrivalDateTime" label="arrivalDateTime" />
          <el-table-column prop="train" label="train" />
          <el-table-column prop="availableSeatsCount" label="availableSeatsCount" />
          <el-table-column
            fixed="right"
            label="Operations">
            <template slot-scope="scope">
              <el-button @click="handleClick" type="text" size="small">choisir</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import JourneyService, { Ijourney } from '../services/journey.service';
import * as _ from 'lodash';

export interface Ivalue {
  display: boolean,
  date: Date;
  orig: string;
  dest: string;
}

function debounce(milliseconds : number = 0, options = {}) {
    return (target : any, propertyKey : string, descriptor : PropertyDescriptor) => {
      const originalMethod = descriptor.value;
      descriptor.value = _.debounce(originalMethod, milliseconds, options);
      return descriptor;
    }
  }

@Component
export default class DisplayJourney extends Vue {
  @Prop() value!: Ivalue;
  private journeys: Ijourney[] = [];
  private loading = true;
  private errorFetch = false;

  @debounce(3000)
  @Watch('value')
  onUpdate() {
    console.log("onUpdate");
    
    if(this.value.display) {
      this.loading = true;
      const service = new JourneyService(this.value.orig, this.value.dest, this.value.date.toISOString());
      service.getJourney().then((data) => {
        this.errorFetch = false;
        this.loading = false;
        this.journeys = data;
      }).catch(() => {
        this.journeys = [];
        this.loading = false;
        this.errorFetch = true;
      
      })
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
}
</style>

