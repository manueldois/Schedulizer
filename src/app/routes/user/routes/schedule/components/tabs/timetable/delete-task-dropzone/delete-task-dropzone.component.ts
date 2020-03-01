import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DragdropService } from '../dragdrop.service';
import interact from 'interactjs';

@Component({
  selector: 'app-delete-task-dropzone',
  templateUrl: './delete-task-dropzone.component.html',
  styleUrls: ['./delete-task-dropzone.component.scss']
})
export class DeleteTaskDropzoneComponent implements OnInit {

  hover: boolean = false

  constructor(private el: ElementRef, private dragdrop: DragdropService) { }

  ngOnInit() {
    this.initInteractivity()
  }

  private initInteractivity() {
    // Drop task to trash
    interact(this.el.nativeElement).dropzone({
      ondragenter: event => {
        this.hover = true
      },
      ondragleave: event => {
        this.hover = false
      },
      ondrop: event => {
        this.dragdrop.onDropToTrash(event)
      }
    })
  }


}
