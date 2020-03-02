import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/types';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  time_start = 9
  time_end = 19

  volunteers: Volunteer[]

  constructor(private dataService: DataService) {
    this.volunteers = dataService.DATA_volunteers
  }

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
