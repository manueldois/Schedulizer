import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Area, Task, Volunteer } from '../../types';
import * as moment from 'moment';



@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class SchedulePage implements OnInit {
  @ViewChild('drop_task_cursor', { static: true }) drop_task_cursor

  areas: Area[] = [
    { name: 'Area 1', id: '1' },
    { name: 'Area 2', id: '2' },
    { name: 'Area 3', id: '3' }
  ]

  area_active = '2'

  tasks: Task[] = [
    { name: { long: 'Task 1', short: 'T1' }, id: '1' },
    { name: { long: 'Task 2', short: 'T2' }, id: '2' },
    { name: { long: 'Task 3', short: 'T3' }, id: '3' }
  ]
 


  // timetable = {
  //   start: moment({hour: 9, minute: 0}),
  //   end: moment({hour: 19, minute: 0}),
  //   duration: () => moment.duration(this.start)
  // }


  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  onDragStart(source: HTMLElement) {
    console.log("Drag start: ", source)
    this.renderer.setStyle(this.drop_task_cursor.nativeElement, 'visibility', `visible`)
    this.renderer.setStyle(this.el.nativeElement, 'cursor', `none`)


    const $mouse_move = <Observable<MouseEvent>> fromEvent(document, 'mousemove')
    const $first_mouse_up = <Observable<MouseEvent>> fromEvent(document, 'mouseup').pipe(take(1))

    $mouse_move.pipe(
      takeUntil($first_mouse_up)
    ).subscribe(event => this.onDragMove(event, source))

    $first_mouse_up.subscribe(event => this.onDragEnd(event, source))
  }

  onDragMove(event: MouseEvent, source) {
    const target = <any> event.target
    let cursor = {x: event.pageX - 5, y: event.pageY + 5}

    if(target.classList.contains('dropRow')){
      cursor.y = target.getBoundingClientRect().y
    }

    this.renderer.setStyle(this.drop_task_cursor.nativeElement, 'transform', `translate(${cursor.x}px, ${cursor.y}px)`)
  }

  onDragEnd(event, source) {
    const target = <any> event.target
    if(target.classList.contains('dropRow')){
      console.log(target, event.offsetX)
    }
    this.renderer.setStyle(this.drop_task_cursor.nativeElement, 'visibility', `hidden`)
    this.renderer.setStyle(this.el.nativeElement, 'cursor', `unset`)
  }
}
