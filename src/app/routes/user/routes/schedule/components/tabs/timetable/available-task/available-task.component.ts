import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Task } from 'src/app/types';
import interact from 'interactjs';
import { DragdropService } from '../dragdrop.service';

@Component({
  selector: 'app-available-task',
  templateUrl: './available-task.component.html',
  styleUrls: ['./available-task.component.scss']
})
export class AvailableTaskComponent implements OnInit {
  @Input('task') task: Task

  constructor(private el: ElementRef, private dragdrop: DragdropService) { }

  ngOnInit() {
    this.initInteractivity();
  }

  private initInteractivity() {
    interact(this.el.nativeElement).draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            (x, y) => {
              return { x: this.dragdrop.snap.value.x, y: this.dragdrop.snap.value.y, range: 40 };
            }
          ],
          offset: { x: 0, y: 22 }
        })
      ],
      listeners: {
        start: event => {
        },
        move: event => {
          // Move cursor, not task element
          this.dragdrop.styleCursor(this.task.name.short, this.task.color)
          this.dragdrop.moveCursor(event.client.x, event.client.y);
        },
        end: event => {
          // Hide cursor
          this.dragdrop.hideCursor();
        }
      }
    });
  }
}
