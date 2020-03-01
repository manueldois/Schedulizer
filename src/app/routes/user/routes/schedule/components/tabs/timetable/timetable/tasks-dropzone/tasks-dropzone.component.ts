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
          this.dragdrop.onDropToTimetable(event)
        },
        ondragenter: event => {
          // Listen to dragenter (before drop) and use for snapping
          const bounding_rect =  event.target.getBoundingClientRect()
          this.dragdrop.snap.y = bounding_rect.y
        },
        ondragleave: event => {
          this.dragdrop.snap.y = null
        }
      })
  }

}
