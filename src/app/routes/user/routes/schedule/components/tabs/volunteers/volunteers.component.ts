import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, NgForm } from '@angular/forms';
import { Volunteer } from 'src/app/types';
import { DataService } from 'src/app/data.service'

@Component({
  selector: 'app-volunteers-tab',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersTabComponent implements OnInit {

  volunteers: Volunteer[]
  schedule_has_volunteers = true

  constructor(private dataService: DataService) {
    this.volunteers = dataService.DATA_volunteers
  }

  ngOnInit() {
  }

  onAddVolunteer(){
    console.log("Add volunteer")
    this.volunteers.unshift({
      id: '444',
      name: 'New volunteer',
      email: '',
      phone: ''
    })
  }

  onEditVolunteer(id: string, form: NgForm){
    console.log("Edit volunteer: ", {id, NgForm})
  }

  onDeleteVolunteer(id: string){
    console.log("Delete volunteer: ", {id})
  }

  onSearch(src: string){
    console.log("Searching volunteers: ", src)
  }

}
