import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SchedulePage } from './schedule.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';


import { DatePickerComponent } from './components/nav/date-picker/date-picker.component'
import { TimetableTabComponent } from './components/tabs/timetable/timetable.component'
import { VolunteersTabComponent } from './components/tabs/volunteers/volunteers.component';
import { TasksTabComponent } from './components/tabs/tasks/tasks.component'
import { AreasTabComponent } from './components/tabs/areas/areas.component';
import { NavComponent } from './components/nav/nav.component';
import { TimetableComponent } from './components/tabs/timetable/timetable/timetable.component';
import { AvailableTaskComponent } from './components/tabs/timetable/available-task/available-task.component';
import { ScheduledTaskComponent } from './components/tabs/timetable/timetable/scheduled-task/scheduled-task.component';
import { DragCursorComponent } from './components/tabs/timetable/drag-cursor/drag-cursor.component';
import { DeleteTaskDropzoneComponent } from './components/tabs/timetable/delete-task-dropzone/delete-task-dropzone.component';
import { TasksDropzoneComponent } from './components/tabs/timetable/timetable/tasks-dropzone/tasks-dropzone.component';
import { ScheduledTaskStylePipe } from './components/tabs/timetable/timetable/scheduled-task-style.pipe';

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
    TimetableTabComponent,
    VolunteersTabComponent,
    AreasTabComponent,
    TimetableComponent,
    AvailableTaskComponent,
    ScheduledTaskComponent,
    TasksTabComponent,
    DragCursorComponent,
    DeleteTaskDropzoneComponent,
    TasksDropzoneComponent,
    ScheduledTaskStylePipe,
  ],
  imports: [
    RouterModule.forChild(scheduleRoutes),
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ]
})
export class ScheduleModule { }
