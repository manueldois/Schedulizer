import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { UserPage } from './user.component';
import { BoardCardComponent } from './components/board-card/board-card.component'

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
]

@NgModule({
  declarations: [
    UserPage,
    BoardCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
