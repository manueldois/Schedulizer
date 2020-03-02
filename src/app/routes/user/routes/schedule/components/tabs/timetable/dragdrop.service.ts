import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  constructor() { }

  cursor = {
    x: -1000,
    y: 0,
    color: 'blue',
    text: ''
  }

  delete_task_dropzone = {
    visible: false,
  }

  snap = {
    x: 0,
    y: 0
  }

  moveCursor(pageX: number, pageY: number) {
    this.cursor.x = pageX
    this.cursor.y = pageY
  }

  hideCursor() {
    this.moveCursor(-1000, 0)
  }

  styleCursor(text, color){
    Object.assign(this.cursor, {text, color})
  }

  onDropToTimetable(event) {
    const source = <HTMLElement>event.relatedTarget
    const target = <HTMLElement>event.target

    const task_id = source.dataset.id
    const volunteer_id = target.dataset.id

    const page_x = event.dragEvent.page.x
    const drop_relative_x = this.pageXToTargetRelativeX(page_x, event.target)

    switch (source.tagName.toLowerCase()) {
      case 'app-available-task':
        console.log('Dropped available task to timetable: ', { task_id, volunteer_id, drop_relative_x })
        break;

      case 'app-scheduled-task':
        console.log('Dropped scheduled task to timetable: ', { task_id, volunteer_id, drop_relative_x })
        break;

      default:
        break;
    }
  }

  onDropToTrash(event){
    const source = <HTMLElement>event.relatedTarget

    const task_id = source.dataset.id

    switch (source.tagName.toLowerCase()) {
      case 'app-scheduled-task':
        console.log('Dropped scheduled task to trash: ', { task_id })
        break;

      default:
        break;
    }
  }

  onResizeScheduledTask(event) {
    const target = <HTMLElement>event.target
    const task_id = target.dataset.id

    console.log("onResizeScheduledTask: ", {event, task_id})
  }

  onEndResizeScheduledTask(event) {
    const target = <HTMLElement>event.target
    const task_id = target.dataset.id

    console.log("onEndResizeScheduledTask: ", {event, task_id})
  }

  pageXToTargetRelativeX(page_x: number, target: HTMLElement) {
    const target_rect = target.getBoundingClientRect()
    return (page_x - target_rect.left) / target_rect.width
  }


}
