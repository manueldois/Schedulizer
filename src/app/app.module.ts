import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { HomePage } from './pages/home/home.component';
import { SchedulesPage } from './pages/schedules/schedules.component';
import { SchedulePage } from './pages/schedule/schedule.component';
import { BoardCardComponent } from './pages/schedules/board-card/board-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SchedulesPage,
    SchedulePage,
    BoardCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
