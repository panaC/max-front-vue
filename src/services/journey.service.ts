import axios from 'axios';
import { store } from '../store/store';

export interface Ijourney {
  originCode: string;
  originName: string;
  destinationCode: string;
  destinationName: string;
  departureDateTime: string;
  arrivalDateTime: string;
  train: string;
  availableSeatsCount: number;
}

export default class JourneyService {
  private result: Ijourney[] = [];

  constructor(private origin: string, private destination: string, private date: string) { }

  async getJourney(): Promise<Ijourney[]> {
    const url = "http://localhost:3000/journeys";
    try {
      const reponse = await axios.get(`${url}?origin=${this.origin}&destination=${this.destination}&date=${this.date}`, {
        headers:{
          'Authorization': `Bearer ${store.state.user.token}`,
        }
      })
      this.result = reponse.data;
    } catch (e) {
      throw e;
    }
    return this.result;
  }
  
  public get getResult() : Ijourney[] {
    return this.result;
  }
  
}