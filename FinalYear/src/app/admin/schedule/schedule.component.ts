import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';
import { schedule } from './schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  station:FormGroup;
  @Input() productList: schedule[];

  constructor(private frmbuilder:FormBuilder) {
    this.station=frmbuilder.group({
      time:['',[Validators.required,Validators.maxLength(9)]],
    });
   }

  ngOnInit() {
  }
  PostData(station:any){
    console.log(this.station.value);
    }
}
