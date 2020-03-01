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

  constructor(private el: ElementRef, private dragdrop: DragdropService) { }

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
                return { x: x, y: this.dragdrop.snap.y, range: 40 }
              }
            ],
            offset: { x: 0, y: 20 }
          })
        ],
        listeners: {
          start: event => {
            // hide task element
            // this.renderer.setStyle(event.target, 'opacity', 0)

            // set flag for template
            this.dragdrop.delete_task_dropzone.visible = true
          },
          move: event => {
            // Move cursor, not task element
            this.dragdrop.moveCursor(event.page.x, event.page.y);
          },
          end: event => {
            // reveal task element
            // this.renderer.setStyle(event.target, 'opacity', 1)

            // Reset deleted tast dropzone
            this.dragdrop.delete_task_dropzone.visible = false
            this.dragdrop.delete_task_dropzone.hover = false

            this.dragdrop.hideCursor()
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
  }
}
