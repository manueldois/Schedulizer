import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Area, Task, Volunteer } from '../../types';
import interact from 'interactjs'


@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class SchedulePage implements OnInit {

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
    const position = { x: 0, y: 0 }

    interact('app-task > .draggable').draggable({
      // modifiers: [
      //   interact.modifiers.snap({
      //     targets: [
      //       function (
      //         // the x and y page coordinates,
      //         x, y,
      //         // the current interaction
      //         interaction,
      //         // the offset information with relativePoint if set
      //         { x: offsetX, y: offsetY, relativePoint, index: relativePointIndex },
      //         // the index of this function in the options.targets array
      //         index) {
      //         return {
      //           x: x,
      //           y: 100,
      //           range: 40,
      //         }
      //       }
      //     ],
      //   })
      // ],
      listeners: {
        start(event) {
          console.log(event.type, event.target)
          event.target.style.opacity = 1

        },
        move(event) {
          position.x += event.dx
          position.y += event.dy

          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        },
        end(event) {
          event.target.style.transform =
            `translate(0,0)`
          position.x = position.y = 0
          event.target.style.opacity = 0
        }
      }
    })

    interact('.dropzone-task')
      .dropzone({
        ondrop: function (event) {
          alert(event.relatedTarget.id
            + ' was dropped into '
            + event.target.id)
        },
        ondragenter: function (event) {
          console.log('ondragenter')
        }
      })
  }




}
