import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as moment from 'moment';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Output() change = new EventEmitter<Moment>()
  @Input() date:Moment = moment()


  onDateChange(event: MatDatepickerInputEvent<Moment>){
    this.setDate(event.value)
  }

  onClickChevron(name: string){
    let date_clone = this.date.clone()
    if(name === 'left'){
      this.setDate( date_clone.subtract(1, 'day') )
      
    }
    if(name === 'right'){
      this.setDate( date_clone.add(1, 'day') )
    }
  }

  setDate(next_date: Moment){
    this.change.emit(next_date)
  }

  constructor() { }

  ngOnInit() {
  }

}
