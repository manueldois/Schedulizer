import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SchedulePage } from './schedule.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatTabsModule } from '@angular/material/tabs';

import { DatePickerComponent } from './components/nav/date-picker/date-picker.component'
import { TimetableTabComponent } from './components/tabs/timetable/timetable.component'
import { TasksTabComponent } from './components/tabs/tasks/tasks.component'
import { VolunteersTabComponent } from './components/tabs/volunteers/volunteers.component';
import { AreasTabComponent } from './components/tabs/areas/areas.component';
import { NavComponent } from './components/nav/nav.component';
import { TimetableComponent } from './components/tabs/timetable/timetable/timetable.component'

const scheduleRoutes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
]


@NgModule({
  declarations: [
    SchedulePage,
    NavComponent,
    DatePickerComponent,
    TasksTabComponent,
    TimetableTabComponent,
    VolunteersTabComponent,
    AreasTabComponent,
    TimetableComponent,
  ],
  imports: [
    RouterModule.forChild(scheduleRoutes),
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTabsModule
  ]
})
export class ScheduleModule { }
