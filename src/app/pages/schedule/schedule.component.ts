import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Area, Task, Volunteer } from '../../types';
import interact from 'interactjs'


@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class SchedulePage implements OnInit {
  cursor = {
    x: 100,
    y: 0,
    opacity: 1
  }

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


  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    let snap_y = null
    const cursor = this.cursor

    interact('app-task').draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            function (x, y) {
              return { x: x, y: snap_y, range: 40 }
            }
          ],
          offset: {x: 0, y: 20}
        })
      ],
      listeners: {
        start(event) {
          console.log(event.type, event.target)
          event.target.style.opacity = 1

        },
        move(event) {
          // Move cursor, not task element
          cursor.x = event.page.x
          cursor.y = event.page.y
          cursor.opacity = 1
        },
        end(event) {
          cursor.x = 0
          cursor.y = 0
          cursor.opacity = 0
        }
      }
    })

    interact('app-timetable .tasks')
      .dropzone({
        ondrop: function (event) {
          alert(event.relatedTarget.id
            + ' was dropped into '
            + event.target.id)
        },
        ondragenter: function (event) {
          const el = event.target
          const bounding_rect = el.getBoundingClientRect()
          snap_y = bounding_rect.y
          console.log('ondragenter')
        },
        ondragleave: function (event) {
          snap_y = null
          console.log('ondragleave')
        }
      })
  }




}
