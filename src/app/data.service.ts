import { Injectable } from '@angular/core';
import { ScheduledTask, Task, Volunteer } from "./types";
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  DATA_tasks: Task[] = [
      {id: '1',  name: {short: 'TA', long: 'Task A'}},
      {id: '2',  name: {short: 'TB', long: 'Task B'}}
  ]
  
  DATA_scheduled_tasks: ScheduledTask[] = [
      {id: '11', task: {id: '1'}, start: moment({hour: 10}), finish: moment({hour: 11})},
      {id: '22', task: {id: '1'}, start: moment({hour: 11, minute: 30 }), finish: moment({hour: 11})},
      {id: '33', task: {id: '2'}, start: moment({hour: 11, minute: 30 }), finish: moment({hour: 11})},
  ]
  
  DATA_volunteers: Volunteer[] = [
      {id: '111', name: 'Manuel Maldonado', email: 'manuelsilvadois@gmail.com', phone: '911111111'},
      {id: '222', name: 'John Smith', email: 'john@gmail.com', phone: '922222222'},
      {id: '333', name: 'Anne Frank', email: 'anne@gmail.com', phone: '933333333'}
  ]
  
  constructor() { }
}
