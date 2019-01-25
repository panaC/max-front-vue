<template>
  <div>
    <el-alert v-if="errorFetch"
      title="error in fetch data"
      type="error">
    </el-alert>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <el-table :data="ticket" v-loading="loading">
          <el-table-column prop="origin" label="origin" />
          <el-table-column prop="originCode" label="originCode" />
          <el-table-column prop="destination" label="destination" />
          <el-table-column prop="destinationCode" label="destinationCode" />
          <el-table-column prop="departureDateTime" label="departureDateTime" />
          <el-table-column
            fixed="right"
            label="Operations">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.$index, ticket)" type="text" size="small">delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ITicket } from '../services/ticket.interface';
import TicketService from '../services/ticket.service';

@Component
export default class Ticket extends Vue {
  private ticket: ITicket[] = [];
  private loading = true;
  private errorFetch = false;
  
  beforeCreate() {
    this.loading = true;
    new TicketService().getTicket(this.$store.state.user.email).then((data) => {
      this.errorFetch = false;
      this.loading = false;
      this.ticket = data;
    }).catch((err) => {
      this.loading = false;
      this.errorFetch = true;
      this.ticket = [];
    });
  } 
  
  handleClick(index: any, rows: any) {
    const data = rows.splice(index, 1);
    const ticket: ITicket = {
      email: this.$store.state.user.email as string,
      origin: data[0].origin,
      originCode: data[0].originCode.split(' ').join('') as string,
      destination: data[0].destination,
      destinationCode: data[0].destinationCode.split(' ').join('') as string,
      departureDateTime: data[0].departureDateTime,
    }
    // true if ticket deleted
    new TicketService().delTicket(ticket);
  }

}
</script>
