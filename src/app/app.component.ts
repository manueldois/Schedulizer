import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-slider></mat-slider>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
