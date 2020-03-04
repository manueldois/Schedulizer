import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cursor } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  constructor() { }

  cursor = new BehaviorSubject<Cursor>({
    x: -1000,
    y: 0,
    color: '',
    text: ''
  })

  delete_task_dropzone = new BehaviorSubject({
    visible: false,
  })

  snap =  new BehaviorSubject({
    x: 0,
    y: 0
  })

  moveCursor(clientX: number, clientY: number) {
    let next = {... this.cursor.value}
    next.x = clientX; next.y = clientY
    this.cursor.next(next)
  }

  hideCursor() {
    this.moveCursor(-1000, 0)
  }

  styleCursor(text?: string, color?: string) {
    let next = {... this.cursor.value}
    if(text) next.text = text; 
    if(color) next.color = color
    this.cursor.next(next)
  }

  setSnapCoords(pageX: number, pageY: number) {
    this.snap.next({x: pageX, y: pageY + 20})
  }

  setDeleteZoneVisibility(visible: boolean){
    this.delete_task_dropzone.next({visible})
  }

 

  onDropToTrash(event) {
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

    console.log("onResizeScheduledTask: ", { event, task_id })
  }

  onEndResizeScheduledTask(event) {
    const target = <HTMLElement>event.target
    const task_id = target.dataset.id

    console.log("onEndResizeScheduledTask: ", { event, task_id })
  }

  pageXToTargetRelativeX(page_x: number, target: HTMLElement) {
    const target_rect = target.getBoundingClientRect()
    return (page_x - target_rect.left) / target_rect.width
  }


}
