import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HistoryEntryModel } from 'src/app/models/history.model';
import { HttpService } from 'src/app/services/http-service/http.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss']
})
export class HistoryViewComponent implements OnInit{
  displayedColumns: string[] = ['stationId', 'timestamp', 'state'];

  history?: HistoryEntryModel[];

  dataSource: MatTableDataSource<HistoryEntryModel> = new MatTableDataSource<HistoryEntryModel>([]);

  constructor(
    public readonly httpService: HttpService,
  ){}  

  ngOnInit(): void {
    this.httpService.getHistory().subscribe(
      (history: HistoryEntryModel[]) => { 
        this.history = history.sort((a, b)=> { 
          return Number( b.timeStamp) - Number( a.timeStamp);
        }); 
        this.dataSource = new MatTableDataSource(history);
      })
  }

}
