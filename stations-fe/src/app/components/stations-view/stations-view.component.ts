import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationModel } from 'src/app/models/station.model';
import { HttpService } from 'src/app/services/http-service/http.service';

@Component({
  selector: 'app-stations-view',
  templateUrl: './stations-view.component.html',
  styleUrls: ['./stations-view.component.scss']
})
export class StationsViewComponent implements OnInit {
  stations: StationModel[] = [];

  constructor(
    public readonly httpService: HttpService,
    private readonly router: Router,
  ){ }

  ngOnInit(): void {
    this.httpService.getStations().subscribe((stations: StationModel[])=> { this.stations = stations });
  }

  openStationDetails(id: number): void {
    this.router.navigate([`stations/${id}`]);
  }
}
