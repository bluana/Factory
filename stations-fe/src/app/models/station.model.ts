export interface StationModel {
  id: number,
  state: State,
}

export enum State {
  red = 0,
  yellow = 1,
  green = 2,
}