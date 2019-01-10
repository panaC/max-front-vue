<template>
  <el-card class="box-card">
    <el-container>
      <el-header>
        <el-row justify="center" type="flex">
          <el-col :span="12">
            <span id="header">{{ header }}</span>
          </el-col>
        </el-row>
      </el-header>
      <form v-on:submit.prevent="search">
        <el-main>
          <el-row justify="center" type="flex">
            <el-col :span="6">
              <div class="block">
                <span class="demonstration">Selectionnez le départ</span>
                <el-select v-model="valueOrigin" placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="block">
                <span class="demonstration">Selectionnez la date</span>
                <el-date-picker
                  v-model="valueDate"
                  type="date"
                  placeholder="Pick a day">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="block">
                <span class="demonstration">Selectionnez l'arrivée</span>
                <el-select v-model="valueDestination" placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </el-main>
        <el-footer>
          <div id="submit">
            <el-button native-type="submit">Rechercher</el-button>
          </div>
        </el-footer>
      </form>
    </el-container>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SelectJourney extends Vue {
  header: string = 'Selectionnez votre trajet';
  valueDate = "";
  valueDestination = "";
  valueOrigin = "";
  options: any = [{
      value: 'ANGERS%20ST%20LAUD',
      label: 'Angers',
    }, {
      value: 'PARIS%20(intramuros)',
      label: 'Paris',
    }];
  
  private search() {
    // check the validation form here
    this.$emit('searchJourney', {
      display: true,
      date: new Date(this.valueDate),
      dest: this.valueDestination,
      orig: this.valueOrigin,
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

span#header {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto
}

#submit {
  color: #8492a6;
  margin-top: 40px;

  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto
}

.block {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto
}


</style>
