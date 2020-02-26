import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class SchedulePage implements OnInit {
  areas = [
    {name: 'Area 1', id: '1'},
    {name: 'Area 2', id: '2'},
    {name: 'Area 3', id: '3'}
  ]
  area_active = '2'

  constructor() { }

  ngOnInit() {
  }

}
