import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State, StationModel } from 'src/app/models/station.model';
import { HttpService } from 'src/app/services/http-service/http.service';

@Component({
  selector: 'app-station-detail-view',
  templateUrl: './station-detail-view.component.html',
  styleUrls: ['./station-detail-view.component.scss']
})
export class StationDetailViewComponent {

  station?: StationModel;

  statusBoxes = {
    0: ['red', 'yellow', 'green'],
    1: ['yellow', 'green', 'red'],
    2: ['green', 'red', 'yellow'],
  }

  constructor(
    public readonly httpService: HttpService,
    private readonly route: ActivatedRoute,
  ){}

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getStation(id).subscribe((station: StationModel)=> { this.station = station });
  }
 
  updateState(state: string){
    if(this.station){
      let newState: State = -1;
      if(state === 'red') newState = State.red;
      if(state === 'yellow') newState = State.yellow;
      if(state === 'green') newState = State.green;
      this.station.state = newState;

      this.httpService.updateStation({id: this.station?.id, state: newState}).subscribe(()=>{});
    }
  }
}
