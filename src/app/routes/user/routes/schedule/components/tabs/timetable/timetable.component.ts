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
  delete_task_dropzone = {visible: false}


  constructor(private dragdrop: DragdropService, private dataService: DataService) {
    this.tasks = dataService.DATA_tasks
    this.areas = dataService.DATA_areas
    dragdrop.delete_task_dropzone.subscribe(next => Object.assign(this.delete_task_dropzone, next))
  }

  ngOnInit() { }

  onAreaChange(event) {
    console.log(event)
  }

}
