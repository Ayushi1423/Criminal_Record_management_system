import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCriminalComponent } from './components/add-criminal/add-criminal.component';
import { ViewRecordsComponent } from './components/view-records/view-records.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-criminal', component: AddCriminalComponent },
  { path: 'view-records', component: ViewRecordsComponent },
  { path: 'edit-record/:id', component: EditRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
