import { Component, OnInit, Renderer2 } from '@angular/core';
import { Volunteer, Area, Task } from 'src/app/types';
import interact from 'interactjs'

@Component({
  selector: 'app-timetable-tab',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableTabComponent implements OnInit {

  delete_task_dropzone = {
    visible: false,
    hovering: false
  }

  selectors = {
    available_task_selector: 'availableTask',
    scheduled_task_selector: 'scheduledTask',
    delete_task_zone_selector: 'deleteTaskZone',
    timetable_tasks_zone_selector: '.tasks-zone'
  }

  areas: Area[] = [
    { name: 'Area 1', id: '1' },
  ]

  area_active = '2'

  tasks: Task[] = [
    { name: { long: 'Task 1', short: 'T1' }, id: '1' },
  ]


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    setInterval(() => {
      this.tasks.push({ name: { long: 'Task N', short: 'TN' }, id: '300' })
    },1000)
  }

  onNewScheduledTask(task_id: string, volunteer_id: string, time_start: number) {
    console.log("New Task \n", "Task ID: " + task_id, " dropped for volunteer: " + volunteer_id, " at position: " + time_start)
  }

  onMovedScheduledTask(scheduled_task_id: string, volunteer_id: string, time_start: number) {
    console.log("Moved Task \n", "Task ID: " + scheduled_task_id, " dropped for volunteer: " + volunteer_id, " at position: " + time_start)
  }

  onDeletedScheduledTask(scheduled_task_id: string) {
    console.log("Deleted Task: ", scheduled_task_id)
  }

  onAreaChange(event) {
    console.log(event)
  }
}
