import { Injectable } from '@angular/core';
import { ScheduledTask, Task, Volunteer, Area } from "./types";
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  DATA_tasks: Task[] = [
    { id: '1', name: { short: 'TA', long: 'Task A' }, color: 'blue', is_available_in_any_area: true },
    { id: '2', name: { short: 'TB', long: 'Task B' }, color: 'pink', is_available_in_any_area: true }
  ]

  DATA_scheduled_tasks: ScheduledTask[] = [
    { id: '11', task: { id: '1' }, area: { id: '1111' }, start: moment({ hour: 10 }), end: moment({ hour: 11 }) },
    { id: '22', task: { id: '1' }, area: { id: '1111' }, start: moment({ hour: 11, minute: 30 }), end: moment({ hour: 13 }) },
    { id: '33', task: { id: '2' }, area: { id: '1111' }, start: moment({ hour: 15, minute: 30 }), end: moment({ hour: 18 }) },
  ]

  DATA_volunteers: Volunteer[] = [
    { id: '111', name: 'Manuel Maldonado', email: 'manuelsilvadois@gmail.com', phone: '911111111', scheduled_tasks: [{ id: '11' }] },
    { id: '222', name: 'John Smith', email: 'john@gmail.com', phone: '922222222', scheduled_tasks: [] },
    { id: '333', name: 'Anne Frank', email: 'anne@gmail.com', phone: '933333333', scheduled_tasks: [{ id: '22' }, { id: '33' }] }
  ]

  DATA_areas: Area[] = [
    { id: '1111', name: 'Area 1', start: 9, end: 17 }
  ]

  constructor() {}
}
