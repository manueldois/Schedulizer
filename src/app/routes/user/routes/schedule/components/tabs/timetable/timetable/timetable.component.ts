import { Component, OnInit } from '@angular/core';
import { Volunteer, Task, ScheduledTask } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import moment from 'moment';
import interact from 'interactjs';
import { DragdropService } from '../dragdrop.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  time_start = moment({ hour: 9 })
  time_end = moment({ hour: 19 })

  volunteers: Volunteer[] // All volunteers who have scheduled tasks in this zone, and their tasks

  constructor(private dataService: DataService, private dragDrop: DragdropService) {
    this.volunteers = [...dataService.DATA_volunteers]

    // Populate scheduled tasks field
    this.populateVolunteersWithScheduledTasks();

    this.initInteractivity()

  }

  private populateVolunteersWithScheduledTasks() {
    for (let i = 0; i < this.volunteers.length; i++) {
      const volunteer_scheduled_tasks = this.volunteers[i].scheduled_tasks;
      for (let j = 0; j < volunteer_scheduled_tasks.length; j++) {
        let volunteer_scheduled_task = volunteer_scheduled_tasks[j];
        Object.assign(volunteer_scheduled_task, this.dataService.DATA_scheduled_tasks
          .find((scheduled_task: ScheduledTask) => scheduled_task.id === volunteer_scheduled_task.id));
        volunteer_scheduled_tasks[j] = volunteer_scheduled_task;
      }
    }
    console.log({ volunteers: this.volunteers });
  }

  ngOnInit() {

  }

  get hours(): string[] {
    let hours = []
    for (let hour = this.time_start.hour(); hour <= this.time_end.hour(); hour++) {
      hours.push(hour + 'h')
    }
    return hours
  }

  private initInteractivity() {
    interact("ul.scheduled-tasks")
      .dropzone({
        ondrop: event => {
          this.onDropToTimetable(event)
          this.dragDrop.releaseRestriction()
        },
        ondragenter: event => {
          // Listen to dragenter (before drop) and use for snapping
          const bounding_rect = event.target.getBoundingClientRect()
          this.dragDrop.setSnapCoords(null, bounding_rect.y)
          this.dragDrop.setRestriction({
            top: -Infinity,
            right: bounding_rect.right,
            bottom: Infinity,
            left: bounding_rect.left
          })
        },
        ondragleave: event => {
          this.dragDrop.setSnapCoords(null, null)
          this.dragDrop.releaseRestriction()
        }
      })
  }

  onDropToTimetable(event) {
    const source = <HTMLElement>event.relatedTarget
    const target = <HTMLElement>event.target

    const source_id = source.dataset.id
    const target_id = target.dataset.id

    const drop_left = event.dragEvent.rect.left
    const drop_left_relative_to_dropzone_left = this.dragDrop.dropLeftRelativeToDropzoneLeft(drop_left, event.target)

    switch (source.tagName.toLowerCase()) {
      case 'app-available-task':
        console.log('Dropped available task to timetable: ', { task_id: source_id , volunteer_id: target_id, drop_relative_x: drop_left_relative_to_dropzone_left })
        break;

      case 'app-scheduled-task':
        console.log('Dropped scheduled task to timetable: ', { task_id: source_id, volunteer_id: target_id, drop_relative_x: drop_left_relative_to_dropzone_left })
        break;

      default:
        break;
    }
  }
}
