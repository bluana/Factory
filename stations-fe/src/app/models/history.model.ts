import { State } from "./station.model";

export interface HistoryEntryModel {
  id: number,
  stationId: number,
  state: State, 
  timeStamp: Date,
} 
