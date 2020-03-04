import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ScheduledTask } from 'src/app/types';
import interact from 'interactjs';
import { DragdropService } from '../../dragdrop.service';

@Component({
  selector: 'app-scheduled-task',
  templateUrl: './scheduled-task.component.html',
  styleUrls: ['./scheduled-task.component.scss']
})
export class ScheduledTaskComponent implements OnInit {
  @Input('scheduledTask') scheduled_task: ScheduledTask

  style = {
    borderColor: 'red',
    color: 'red',
    opacity: 1,
    transform: 'translate(0,0)'
  }

  dragging_position = { x: 0, y: 0 }
  dragging_offset = { x: 0, y: 0 }

  constructor(private el: ElementRef, private dragdrop: DragdropService) {
  }

  ngOnInit() {
    this.initInteractivity()
  }

  private initInteractivity() {
    interact(this.el.nativeElement)
      .draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: [
              (x, y) => {
                return { x: this.dragdrop.snap.value.x, y: this.dragdrop.snap.value.y, range: 40 }
              }
            ],
            offset: { x: 0, y: 22 }
          }),
          interact.modifiers.restrictRect({
            restriction: (x, y, el) => {
              if(this.dragdrop.restrict.value.active){
                return this.dragdrop.restrict.value.rect
              }else{
                return null
              }
            }
          })
        ],
        listeners: {
          start: event => {
            // Show delete zone
            this.dragdrop.setDeleteZoneVisibility(true)
            this.dragging_offset = {
              x: event.page.x - (event.rect.left + event.rect.width / 2),
              y: event.page.y - (event.rect.top + event.rect.height / 2)
            }
          },
          move: event => {
            // Move task element
            this.dragging_position.x += event.dx
            this.dragging_position.y += event.dy
            this.style.transform = `translate(${this.dragging_position.x}px,${this.dragging_position.y + this.dragging_offset.y}px)`
          },
          end: event => {
            // Reset element
            this.dragging_position.x = this.dragging_position.y = 0
            this.style.transform = `translate(0,0)`

            // Hide delete zone
            this.dragdrop.setDeleteZoneVisibility(false)
          }
        }
      })
      .resizable({
        edges: {
          left: '.resize.left',
          right: '.resize.right'
        },
        onmove: event => {
          this.dragdrop.onResizeScheduledTask(event)
        },
        onend: event => {
          this.dragdrop.onEndResizeScheduledTask(event)

        }
      })
  }
}
