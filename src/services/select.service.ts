import { STATION_LIST } from '../constants';

export interface IStation {
  label: string;
  value: string;
}

export function getStationList() : IStation[] {
  let ret: IStation[] = [];

  STATION_LIST.forEach(element => {
    ret.push({
      label: element.name,
      value: encodeURI(element.name),
    })
  });
  return ret;
}