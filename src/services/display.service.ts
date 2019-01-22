import axios from 'axios';
import { store } from '../store/store';
import { ITicket } from './ticket.interface';

export default class DisplayService {

  /**
   * sendTicket
   */
  public async sendTicket(ticket: ITicket) {
    const url = "http://localhost:3000/tickets"
    let bool = false;
    try {
      const reponse = await axios.post(`${url}?token=${store.state.user.token}`, ticket, {
        headers:{
          'Authorization': `Bearer ${store.state.user.token}`,
        }
      });
      bool = (reponse.data.message === "ticket saved" ? true : false);
    } catch (err) {
      throw err;
    }
    return bool;
  }
}