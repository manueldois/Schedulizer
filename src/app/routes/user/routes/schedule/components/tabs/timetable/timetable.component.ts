import { Component, OnInit, Renderer2 } from '@angular/core';
import { Volunteer, Area, Task } from 'src/app/types';
import interact from 'interactjs'

@Component({
  selector: 'app-timetable-tab',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableTabComponent implements OnInit {
  cursor = {
    x: 100,
    y: 100,
    opacity: 0,
    snap_y: null
  }

  delete_task_dropzone = {
    visible: false,
    hovering: false
  }

  areas: Area[] = [
    { name: 'Area 1', id: '1' },
    { name: 'Area 2', id: '2' },
    { name: 'Area 3', id: '3' },
    { name: 'Area 1', id: '1' },
    { name: 'Area 2', id: '2' },
    { name: 'Area 3', id: '3' },
    { name: 'Area 1', id: '1' },
    { name: 'Area 2', id: '2' },
    { name: 'Area 3', id: '3' },
    { name: 'Area 1', id: '1' },
    { name: 'Area 2', id: '2' },
    { name: 'Area 3', id: '3' }
  ]

  area_active = '2'

  tasks: Task[] = [
    { name: { long: 'Task 1', short: 'T1' }, id: '1' },
    { name: { long: 'Task 2', short: 'T2' }, id: '2' },
    { name: { long: 'Task 3', short: 'T3' }, id: '3' }
  ]
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.initDragDrop()
  }

  initDragDrop() {
    this.initInteractOnAvailableTasks()
    this.initInteractOnScheduledTasks()
  }

  initInteractOnAvailableTasks() {
    const available_task_selector = '.available-task'
    const timetable_tasks_zone_selector = 'app-timetable .tasks-zone'

    // Drag with snapping
    interact(available_task_selector).draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            (x, y) => {
              return { x: x, y: this.cursor.snap_y, range: 40 }
            }
          ],
          offset: { x: 0, y: 20 }
        })
      ],
      listeners: {
        start: event => {
          // Reveal cursor
          this.cursor.opacity = 1
        },
        move: event => {
          // Move cursor, not task element
          this.cursor.x = event.page.x
          this.cursor.y = event.page.y
        },
        end: event => {
          // Reset cursor
          this.cursor.x = 0
          this.cursor.y = 0
          this.cursor.opacity = 0
        }
      }
    })

    // Drop into timetable
    interact(timetable_tasks_zone_selector).dropzone({
      accept: available_task_selector,
      ondrop: event => {
        const page_x = event.dragEvent.page.x
        const drop_relative_x = this.pageXToTargetRelativeX(page_x, event.target)

        const task_id = event.relatedTarget.dataset.id
        const volunteer_id = event.target.dataset.id

        this.onNewScheduledTask(task_id, volunteer_id, drop_relative_x)
      },
      ondragenter: event => {
        // Listen to dragenter (before drop) and use for snapping
        const el = event.target
        const bounding_rect = el.getBoundingClientRect()
        this.cursor.snap_y = bounding_rect.y
      },
      ondragleave: _ => {
        this.cursor.snap_y = null
      }
    })
  }

  initInteractOnScheduledTasks() {
    const scheduled_task_selector = '.scheduled-task'
    const timetable_tasks_zone_selector = 'app-timetable .tasks-zone'
    const delete_task_zone_selector = '.delete-task-dropzone'


    // Drag with snapping and resizing
    interact(scheduled_task_selector)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            (x, y) => {
              return { x: x, y: this.cursor.snap_y, range: 40 }
            }
          ],
          offset: { x: 0, y: 20 }
        })
      ],
      listeners: {
        start: event => {
          // Reveal cursor
          this.cursor.opacity = 1

          // hide task element
          this.renderer.setStyle(event.target, 'opacity', 0)

          // set flag for template
          this.delete_task_dropzone.visible = true
        },
        move: event => {
          // Move cursor, not task element
          this.cursor.x = event.page.x
          this.cursor.y = event.page.y
        },
        end: event => {
          // Reset cursor
          this.cursor.x = 0
          this.cursor.y = 0
          this.cursor.opacity = 0

          // reveal task element
          this.renderer.setStyle(event.target, 'opacity', 1)

          // Reset deleted tast dropzone
          this.delete_task_dropzone.visible = false
          this.delete_task_dropzone.hovering = false
        }
      }
    })
    .resizable({
      edges: {
        left: '.resize.left',
        right: '.resize.right'
      },
      onmove: event => {
        console.log("on resize")
      }
    })

    // Drop into timetable
    interact(timetable_tasks_zone_selector).dropzone({
      accept: scheduled_task_selector,
      ondrop: event => {
        const page_x = event.dragEvent.page.x
        const drop_relative_x = this.pageXToTargetRelativeX(page_x, event.target)

        const task_id = event.relatedTarget.dataset.id
        const volunteer_id = event.target.dataset.id

        console.log('drop into timetable')
        
        this.onMovedScheduledTask(task_id, volunteer_id, drop_relative_x)
      },
      ondragenter: event => {
        // Listen to dragenter (before drop) and use for snapping
        const el = event.target
        const bounding_rect = el.getBoundingClientRect()
        this.cursor.snap_y = bounding_rect.y
      },
      ondragleave: _ => {
        this.cursor.snap_y = null
      }
    })

    // Drop into trash
    interact(delete_task_zone_selector).dropzone({
      accept: scheduled_task_selector,
      ondragenter: event => {
        console.log('on drag enter trash')
        this.delete_task_dropzone.hovering = true
      },
      ondragleave: event => {
        this.delete_task_dropzone.hovering = false
      },
      ondrop: event => {
        const task_id = event.relatedTarget.dataset.id
        this.onDeletedScheduledTask(task_id)
      }
    })

  }

  pageXToTargetRelativeX(page_x: number, target: HTMLElement){
    const target_rect = target.getBoundingClientRect()
    return (page_x - target_rect.left) / target_rect.width
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
