import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DragdropService } from '../dragdrop.service';
import interact from 'interactjs';

@Component({
  selector: 'app-delete-task-dropzone',
  templateUrl: './delete-task-dropzone.component.html',
  styleUrls: ['./delete-task-dropzone.component.scss']
})
export class DeleteTaskDropzoneComponent implements OnInit {
  @ViewChild('nativeComponent', {static: true}) el: ElementRef

  constructor(private dragdrop: DragdropService) { }

  ngOnInit() {
    this.initInteractivity()
  }

  private initInteractivity() {
    // Drop task to trash
    interact(this.el.nativeElement).dropzone({
      ondragenter: event => {
        this.dragdrop.setDeleteTaskDropzoneHover(true)
      },
      ondragleave: event => {
        this.dragdrop.setDeleteTaskDropzoneHover(false)
      },
      ondrop: event => {
        const task_id = event.relatedTarget.dataset.id
        // this.onDeletedScheduledTask(task_id)
      }
    })
  }


}
