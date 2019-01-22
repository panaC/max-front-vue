import axios from 'axios';
import { store } from '../store/store';
import { ITicket } from './ticket.interface';

export default class TicketInterface {
  private _ticket: ITicket[] = [];

  public async getTicket(e: string) {
    const url = "http://localhost:3000/tickets";
    try {
      const reponse = await axios.get(`${url}?email=${e}&token=${store.state.user.token}`, {
        headers: {
          'Authorization': `Bearer ${store.state.user.token}`,
        }
      })
      this._ticket = reponse.data;
    } catch (e) {
      throw e;
    }
    return this._ticket;
  }

  public async delTicket(ticket: ITicket) {
    const url = "http://localhost:3000/tickets";
    let bool = false;
    try {
      const reponse = await axios.delete(`${url}?token=${store.state.user.token}`, {
        data: ticket,
        headers: {
          'Authorization': `Bearer ${store.state.user.token}`,
        }
      })
      bool = (reponse.data.message === "ticket deleted" ? true : false);
    } catch (e) {
      throw e;
    }
    return bool;
  }
 
  public get ticket(): ITicket[] {
    return this._ticket;
  }
}