import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HomePage } from './pages/home/home.component';
import { SchedulesPage } from './pages/schedules/schedules.component';
import { SchedulePage } from './pages/schedule/schedule.component';
import { BoardCardComponent } from './pages/schedules/board-card/board-card.component';
import { DatePickerComponent } from './pages/schedule/date-picker/date-picker.component';
import { TimetableComponent } from './pages/schedule/timetable/timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SchedulesPage,
    SchedulePage,
    BoardCardComponent,
    DatePickerComponent,
    TimetableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
