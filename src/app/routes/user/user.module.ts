import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':userID',
    loadChildren: () => import('./routes/user/user.module').then(m => m.UserModule),
  },
  {
    path: ':userID/:scheduleID',
    loadChildren: () => import('./routes/schedule/schedule.module').then(m => m.ScheduleModule),
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
