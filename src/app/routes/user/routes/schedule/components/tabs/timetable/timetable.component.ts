import { Component, OnInit, Renderer2 } from '@angular/core';
import { Volunteer, Area, Task } from 'src/app/types';
import interact from 'interactjs'
import { DragdropService } from './dragdrop.service';

@Component({
  selector: 'app-timetable-tab',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableTabComponent implements OnInit {

  areas: Area[] = [
    { name: 'Area 1', id: '1' },
  ]

  area_active = '2'

  tasks: Task[] = [
    { name: { long: 'Task 1', short: 'T1' }, id: '1' },
  ]

  constructor(private dragdrop: DragdropService) { }

  ngOnInit() { }

  onAreaChange(event) {
    console.log(event)
  }

}
