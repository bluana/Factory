import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsViewComponent } from './components/stations-view/stations-view.component';
import { StationDetailViewComponent } from './components/station-detail-view/station-detail-view.component';
import { HistoryViewComponent } from './components/history-view/history-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    StationsViewComponent,
    StationDetailViewComponent,
    HistoryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
