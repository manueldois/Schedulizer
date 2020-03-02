import { Component, OnInit, ElementRef } from '@angular/core';
import { DragdropService } from '../dragdrop.service';

@Component({
  selector: 'app-drag-cursor',
  templateUrl: './drag-cursor.component.html',
  styleUrls: ['./drag-cursor.component.scss']
})
export class DragCursorComponent implements OnInit {
  
  x = 0
  y = 0
  color = 'red'
  text = 'hi'

  constructor(private el: ElementRef, private dragdrop: DragdropService) { }

  ngOnInit() {
  }

}
