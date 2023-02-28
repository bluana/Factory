import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { httpUrls, urlExtensions } from 'src/app/common/constants/http-urls';
import { StationModel } from 'src/app/models/station.model';
import { HistoryEntryModel } from 'src/app/models/history.model';
import { historyMock } from 'src/app/mocks/history.mock';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) {
  }

  getStations(): Observable<StationModel[]> {
    return this.http.get<StationModel[]>(`${httpUrls.api}/${urlExtensions.stations}`);
  }
  
  getStation(id: number): Observable<StationModel> {
    return this.http.get<StationModel>(`${httpUrls.api}/${urlExtensions.stations}/${id}`);
  }

  updateStation(station: StationModel): Observable<StationModel>{
    return this.http.put<StationModel>(`${httpUrls.api}/${urlExtensions.stations}/${station.id}`, station)
  }

  getHistory(): Observable<HistoryEntryModel[]>{
    //return this.http.get<HistoryEntryModel[]>(`${httpUrls.api}/${urlExtensions.history}`)
    return of(historyMock)
  }
}
