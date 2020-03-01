import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  constructor() { }

  selectors = {
    available_task: 'app-available-task',
    scheduled_task: 'app-scheduled-task',
    delete_task_dropzone: 'app-delete-task-dropzone',
    timetable_tasks_dropzone: '.tasks-dropzone'
  }

  cursor = {
    x: -1000,
    y: 0,
  }

  delete_task_dropzone = {
    visible: false,
    hover: false
  }

  snap = {
    x: 0,
    y: 0
  }

  moveCursor(pageX: number, pageY: number){
    this.cursor.x = pageX
    this.cursor.y = pageY
  }

  hideCursor(){
    this.moveCursor(-1000,0)
  }

  setDeleteTaskDropzoneVisibility(visible: boolean){
    this.delete_task_dropzone.visible = visible
  }

  setDeleteTaskDropzoneHover(hover: boolean){
    this.delete_task_dropzone.hover = hover
  }

  pageXToTargetRelativeX(page_x: number, target: HTMLElement) {
    const target_rect = target.getBoundingClientRect()
    return (page_x - target_rect.left) / target_rect.width
  }

  
}
