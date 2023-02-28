import { HistoryEntryModel } from '../models/history.model';
import { State } from '../models/station.model';

export const historyMock: HistoryEntryModel[] = [
  {
    id: 0,
    stationId: 0,
    state: State.green,
    timeStamp: new Date(Math.floor(Math.random() * Date.now())),
  },
  {
    id: 1,
    stationId: 0,
    state: State.red,
    timeStamp: new Date(Math.floor(Math.random() * Date.now())),
  },
  {
    id: 2,
    stationId: 2,
    state: State.green,
    timeStamp: new Date(Math.floor(Math.random() * Date.now())),
  },
  {
    id: 3,
    stationId: 3,
    state: State.yellow,
    timeStamp: new Date(Math.floor(Math.random() * Date.now())),
  },
  {
    id: 4,
    stationId: 1,
    state: State.red,
    timeStamp: new Date(Math.floor(Math.random() * Date.now())),
  },
];
