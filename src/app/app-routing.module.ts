import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { SchedulePage } from './pages/schedule/schedule.component';
import { SchedulesPage } from './pages/schedules/schedules.component';



const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'schedules', component: SchedulesPage},
  {path: 'schedule', component: SchedulePage}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
