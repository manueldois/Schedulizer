import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SchedulePage } from './schedule.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter'

import { DatePickerComponent } from './components/date-picker/date-picker.component'
import { TimetableComponent } from './components/timetable/timetable.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { TaskComponent } from './components/task/task.component'

const scheduleRoutes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
]


@NgModule({
  declarations: [
    SchedulePage,
    DatePickerComponent,
    TasksComponent,
    TaskComponent,
    TimetableComponent
  ],
  imports: [
    RouterModule.forChild(scheduleRoutes),
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule
  ]
})
export class ScheduleModule { }
