export interface ITicket {
  readonly email: string;
  readonly originCode: string;
  readonly destinationCode: string;
  readonly departureDateTime: Date;
}