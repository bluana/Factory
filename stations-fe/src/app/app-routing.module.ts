import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryViewComponent } from './components/history-view/history-view.component';
import { StationDetailViewComponent } from './components/station-detail-view/station-detail-view.component';
import { StationsViewComponent } from './components/stations-view/stations-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/stations', pathMatch: 'full' },
  { path: 'stations', component: StationsViewComponent },
  { path: 'stations/:id', component: StationDetailViewComponent },
  { path: 'history', component: HistoryViewComponent },
  { path: '**', redirectTo: '/stations' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
