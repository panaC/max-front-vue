export interface ITicket {
  readonly email: string;
  readonly origin: string;
  readonly originCode: string;
  readonly destination: string;
  readonly destinationCode: string;
  readonly departureDateTime: Date;
}