import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Area } from 'src/app/types';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-areas-tab',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss', '../shared.scss']
})
export class AreasTabComponent implements OnInit {

  areas: Area[]
  schedule_has_areas = false

  constructor(private dataService: DataService) {
    this.areas = dataService.DATA_areas
  }

  ngOnInit() {
  }

  onAddArea(){
    console.log("Add area")
  }

  onEditArea(id: string, form: NgForm){
    console.log("Edit area: ", {id, NgForm})
  }

  onDeleteArea(id: string){
    console.log("Delete area: ", {id})
  }

  onSearchArea(src: string){
    console.log("Searching area: ", src)
  }


}
