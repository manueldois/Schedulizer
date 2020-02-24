import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomePage } from './pages/home/home.component';
import { SchedulesPage } from './pages/schedules/schedules.component';
import { SchedulePage } from './pages/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SchedulesPage,
    SchedulePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
