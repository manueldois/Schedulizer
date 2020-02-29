import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage
  }
]

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
