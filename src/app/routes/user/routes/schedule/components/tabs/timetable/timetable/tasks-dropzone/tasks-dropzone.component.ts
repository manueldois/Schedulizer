import { Component, OnInit, ElementRef } from '@angular/core';
import interact from 'interactjs';
import { DragdropService } from '../../dragdrop.service';

@Component({
  selector: 'app-tasks-dropzone',
  templateUrl: './tasks-dropzone.component.html',
  styleUrls: ['./tasks-dropzone.component.scss']
})
export class TasksDropzoneComponent implements OnInit {

  constructor(private el: ElementRef, private dragdrop: DragdropService) { }

  ngOnInit() {
    this.initInteractivity()
  }

  private initInteractivity() {
    interact(this.el.nativeElement)
      .dropzone({
        ondrop: event => {
          console.log('drop task in timetable')
          const page_x = event.dragEvent.page.x
          const drop_relative_x = this.dragdrop.pageXToTargetRelativeX(page_x, event.target)

          const task_id = event.relatedTarget.dataset.id
          const volunteer_id = event.target.dataset.id

          const related_target = <HTMLElement>event.relatedTarget

          // if (related_target.hasAttribute(scheduled_task_attr)) {
          //   this.onMovedScheduledTask(task_id, volunteer_id, drop_relative_x)
          // }

          // if (related_target.hasAttribute(available_task_attr)) {
          //   this.onNewScheduledTask(task_id, volunteer_id, drop_relative_x)
          // }
        },
        ondragenter: event => {
          // Listen to dragenter (before drop) and use for snapping
          const el = event.target
          const bounding_rect = el.getBoundingClientRect()
          this.dragdrop.snap.y = bounding_rect.y
        },
        ondragleave: event => {
          this.dragdrop.snap.y = null
        }
      })
  }

}
