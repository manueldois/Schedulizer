import { Component, OnInit, ElementRef } from '@angular/core';
import { DragdropService } from '../dragdrop.service';
import interact from 'interactjs';
import { ScheduledTask } from 'src/app/types';
import moment from 'moment';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  time_start = 9
  time_end = 19

  scheduled_task1: ScheduledTask = {
    id: '11',
    task: { id: '1', name: {short: 'TA', long: 'Task A'} }, 
    start: moment({ hour: 10 }), 
    finish: moment({ hour: 11 }),
  }

  constructor(private el: ElementRef, private dragdrop: DragdropService) { }

  ngOnInit() {

  }

  get hours(): string[] {
    let hours = []
    for (let hour = this.time_start; hour <= this.time_end; hour++) {
      hours.push(hour + 'h')
    }
    return hours
  }

  get day_duration(): number {
    return this.time_end - this.time_start
  }

}
