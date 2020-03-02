import { Component, OnInit, Renderer2 } from '@angular/core';
import { Volunteer, Area, Task } from 'src/app/types';
import interact from 'interactjs'
import { DragdropService } from './dragdrop.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-timetable-tab',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableTabComponent implements OnInit {

  areas: Area[]
  area_active = '2'
  tasks: Task[]


  constructor(private dragdrop: DragdropService, private dataService: DataService) {
    this.tasks = dataService.DATA_tasks
    this.areas = dataService.DATA_areas
  }

  ngOnInit() { }

  onAreaChange(event) {
    console.log(event)
  }

}
