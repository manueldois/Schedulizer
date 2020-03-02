import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss','../shared.scss']
})
export class TasksTabComponent implements OnInit {

  tasks: Task[]
  schedule_has_tasks = true

  constructor(private dataService: DataService) {
    this.tasks = dataService.DATA_tasks
  }

  ngOnInit() {
  }

  onAddTask(){
    console.log("Add task")
  }

  onEditTask(id: string, form: NgForm){
    console.log("Edit task: ", {id, NgForm})
  }

  onDeleteTask(id: string){
    console.log("Delete task: ", {id})
  }

  onSearchTask(src: string){
    console.log("Searching task: ", src)
  }

  nameToShort(long: string){
    const initials = long.toUpperCase().split(' ').map(word => word[0])
    return initials.join('')
  }

}
